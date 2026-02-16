import type { Project } from '../types';
import type { Selection } from '../App';
import { getCurrentImage } from '../utils/projectSelectors';

interface DrawingViewerProps {
  project: Project;
  selection: Selection;
}

const DrawingViewer = ({ project, selection }: DrawingViewerProps) => {
  const imageName = getCurrentImage(project, selection);

  if (!imageName) {
    return <div className="w-full h-full flex items-center justify-center text-gray-400">도면을 선택해주세요</div>;
  }

  return <img src={`/drawings/${imageName}`} alt="도면 이미지" className="w-full h-full object-contain" />;
};

export default DrawingViewer;
