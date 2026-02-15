import { useState } from 'react';
import { projectData } from './data/project';
import Breadcrumb from './components/Breadcrumb';
import Chip from './components/Chip';
import RegionSelector from './components/RegionSelector';

export type Selection = {
  drawingId?: string | null;
  discipline?: string | null;
  region?: string | null;
  revisionVersion?: string | null;
};

export default function App() {
  const [selection, setSelection] = useState<Selection>({
    drawingId: null,
    discipline: null,
    region: null,
    revisionVersion: null,
  });

  const drawing = selection.drawingId ? projectData.drawings[selection.drawingId] : null;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col w-full min-h-screen bg-amber-50 px-4 py-5 sm:px-8 sm:py-6">
        {/* 서치 영역 */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <Breadcrumb selection={selection} project={projectData} />
          </div>

          {/* Drawing 선택 */}
          <div className="flex gap-2 flex-wrap">
            {Object.values(projectData.drawings).map((d) => (
              <Chip
                key={d.id}
                label={d.name}
                selected={selection.drawingId === d.id}
                onClick={() =>
                  setSelection({
                    drawingId: d.id,
                    discipline: null,
                    region: null,
                    revisionVersion: null,
                  })
                }
              />
            ))}
          </div>

          {/* Discipline 선택 */}
          {drawing && drawing.disciplines && (
            <div className="flex gap-2 flex-wrap">
              {Object.keys(drawing.disciplines).map((discipline) => (
                <Chip
                  key={discipline}
                  label={discipline}
                  selected={selection.discipline === discipline}
                  onClick={() =>
                    setSelection((prev) => ({
                      ...prev,
                      discipline,
                      region: null,
                      revisionVersion: null,
                    }))
                  }
                />
              ))}
            </div>
          )}

          {/* Region 선택 */}
          <RegionSelector project={projectData} selection={selection} setSelection={setSelection} />
        </div>

        {/* 이미지 표시 */}
        <div className="flex flex-col p-3 sm:p-8">
          <div className="w-full aspect-square bg-pink-50">
            {/* 현재 1:1 비율 이미지 영역때문에 스크롤 생김 */}
            <p>이미지 영역</p>
          </div>
          <div className="flex w-full justify-center p-2 sm:p-4">
            <p>투명도 바 영역</p>
          </div>
        </div>
      </div>
    </div>
  );
}
