import { useMemo, useState } from 'react';
import { projectData } from './data/project';
import { getDiscipline } from './utils/project';
import {
  Breadcrumb,
  DisciplineSelector,
  DrawingSelector,
  DrawingViewer,
  RegionSelector,
  RevisionSelector,
} from './components';

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
  const disciplineData = getDiscipline(projectData, selection.drawingId, selection.discipline);

  // revision 객체 배열
  const revisions = (() => {
    if (!disciplineData) return [];

    // region이 선택되지 않은 경우
    if (!selection.region) return [];

    // 전체를 선택한 경우
    if (selection.region === '전체') {
      return disciplineData.revisions ?? [];
    }

    // 특정 region을 선택한 경우
    return disciplineData.regions?.[selection.region]?.revisions ?? [];
  })();

  // revision을 날짜 역순으로 정렬
  const sortedRevisions = useMemo(() => {
    return [...revisions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [revisions]);

  return (
    <div className="min-h-screen flex flex-col max-w-6xl mx-auto">
      {/* 상단 - breadcrumb */}
      <div className="px-3 sm:px-6 py-4 border-b">
        <Breadcrumb selection={selection} project={projectData} />
      </div>

      {/* 중앙 - 탐색 + 도면 이미지 */}
      <div className="flex flex-col-reverse sm:flex-row sm:flex-1 overflow-hidden">
        {/* 도면부터 리비전까지 탐색 */}
        <div className="flex flex-col sm:w-2/5 px-3 py-4 gap-3">
          {/* Drawing 선택 */}
          <DrawingSelector project={projectData} selection={selection} setSelection={setSelection} />

          {/* Discipline 선택 */}
          <DisciplineSelector drawing={drawing} selection={selection} setSelection={setSelection} />

          {/* Region 선택 */}
          <RegionSelector discipline={disciplineData} selection={selection} setSelection={setSelection} />

          {/* Revision 선택 */}
          <RevisionSelector revisions={sortedRevisions} selection={selection} setSelection={setSelection} />
        </div>

        {/* 도면 이미지 */}
        <div className="w-full aspect-square sm:aspect-auto bg-white">
          <DrawingViewer project={projectData} selection={selection} />
        </div>
      </div>
    </div>
  );
}
