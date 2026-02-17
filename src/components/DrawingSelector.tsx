import type { Project } from '../types';
import type { Selection } from '../App';

interface DrawingSelectorProps {
  project: Project;
  selection: Selection;
  setSelection: React.Dispatch<React.SetStateAction<Selection>>;
}

export const DrawingSelector = ({ project, selection, setSelection }: DrawingSelectorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="px-2 font-bold">도면</div>
      <select
        value={selection.drawingId ?? ''}
        onChange={(e) =>
          setSelection({
            drawingId: e.target.value || null,
            discipline: null,
            region: null,
            revisionVersion: null,
          })
        }
        className="w-full border border-gray-300 rounded-md p-2 bg-white cursor-pointer"
      >
        <option value="">도면 선택</option>
        {Object.values(project.drawings).map((d) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>
    </div>
  );
};
