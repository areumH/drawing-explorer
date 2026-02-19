import { useState } from 'react';
import type { Project } from '../types';
import type { Selection } from '../App';
import { getCurrentImage } from '../utils/project';
import { ToggleSwitch } from './ToggleSwitch';

interface DrawingViewerProps {
  project: Project;
  selection: Selection;
}

export const DrawingViewer = ({ project, selection }: DrawingViewerProps) => {
  const imageName = getCurrentImage(project, selection);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [polygonVisible, setPolygonVisible] = useState<boolean>(true);

  const drawing = selection.drawingId ? project.drawings[selection.drawingId] : null;
  const discipline = drawing && selection.discipline ? drawing.disciplines?.[selection.discipline] : null;
  const region =
    discipline && selection.region && selection.region !== '전체' ? discipline.regions?.[selection.region] : null;

  // polygon 존재 여부
  const hasPolygon = !selection.revisionVersion && !!((region && region.polygon) || (discipline && discipline.polygon));

  // polygon 표시 여부
  const showPolygon = polygonVisible && hasPolygon;

  // polygon vertices
  const polygonVertices = (() => {
    if (!showPolygon) return null;
    if (region?.polygon) return region.polygon.vertices;
    if (discipline?.polygon) return discipline.polygon.vertices;
    return null;
  })();

  if (!imageName) {
    return <div className="w-full h-full flex items-center justify-center text-gray-400">도면을 선택해주세요</div>;
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 토글 버튼 */}
      {hasPolygon && (
        <div className="absolute top-3 right-4 sm:right-9 z-10 flex items-center gap-2">
          <span className="text-sm sm:text-base text-gray-700">폴리곤 표시</span>
          <ToggleSwitch checked={polygonVisible} onChange={setPolygonVisible} />
        </div>
      )}

      {/* 도면 이미지 */}
      <img
        src={`/drawings/${imageName}`}
        alt="도면 이미지"
        className="w-full h-full object-contain"
        onLoad={(e) => {
          const img = e.currentTarget;
          setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
        }}
      />

      {/* SVG 오버레이 */}
      {polygonVertices && imageSize.width > 0 && (
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${imageSize.width} ${imageSize.height}`}
        >
          <polygon
            points={polygonVertices.map(([x, y]) => `${x},${y}`).join(' ')}
            fill="rgba(59,130,246,0.3)"
            stroke="rgb(59,130,246)"
            strokeWidth={5}
          />
        </svg>
      )}
    </div>
  );
};
