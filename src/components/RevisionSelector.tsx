import type { Revision } from '../types';
import type { Selection } from '../App';
import { RevisionItem } from './RevisionItem';

interface RevisionSelectorProps {
  revisions: Revision[];
  selection: Selection;
  setSelection: React.Dispatch<React.SetStateAction<Selection>>;
}

export const RevisionSelector = ({ revisions, selection, setSelection }: RevisionSelectorProps) => {
  if (!revisions || revisions.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 text-sm sm:text-base">
      <div className="px-2 font-bold">리비전</div>
      <div className="flex flex-col gap-3">
        {revisions.map((rev) => (
          <RevisionItem
            key={rev.version}
            revision={rev}
            isSelected={selection.revisionVersion === rev.version}
            onSelect={(version) =>
              setSelection((prev) => ({
                ...prev,
                revisionVersion: prev.revisionVersion === version ? null : version,
              }))
            }
          />
        ))}
      </div>
    </div>
  );
};
