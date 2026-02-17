import type { Project } from '../types/project';
import type { Selection } from '../App';

interface BreadcrumbProps {
  selection: Selection;
  project: Project;
}

export const Breadcrumb = ({ selection, project }: BreadcrumbProps) => {
  const drawing = selection.drawingId ? project.drawings[selection.drawingId] : null;

  return (
    <div className="flex gap-2 text-sm sm:text-lg">
      <span>전체</span>
      {drawing && <span>&gt; {drawing.name}</span>}
      {selection.discipline && <span>&gt; {selection.discipline}</span>}
      {selection.region && <span>&gt; {selection.region}</span>}
      {selection.revisionVersion && <span>&gt; {selection.revisionVersion}</span>}
    </div>
  );
};
