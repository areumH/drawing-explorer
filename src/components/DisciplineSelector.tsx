import type { Drawing } from '../types';
import type { Selection } from '../App';

interface DisciplineSelectorProps {
  drawing: Drawing | null;
  selection: Selection;
  setSelection: React.Dispatch<React.SetStateAction<Selection>>;
}

export const DisciplineSelector = ({ drawing, selection, setSelection }: DisciplineSelectorProps) => {
  return (
    <div className="flex flex-col gap-2 text-sm sm:text-base">
      {drawing && drawing.disciplines && (
        <>
          <div className="px-2 font-bold">공종</div>
          <select
            value={selection.discipline ?? ''}
            onChange={(e) =>
              setSelection((prev) => ({
                ...prev,
                discipline: e.target.value || null,
                region: null,
                revisionVersion: null,
              }))
            }
            className="w-full border border-gray-300 rounded-md p-2 bg-white cursor-pointer"
          >
            <option value="">공종 선택</option>
            {Object.keys(drawing.disciplines).map((discipline) => (
              <option key={discipline} value={discipline}>
                {discipline}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

