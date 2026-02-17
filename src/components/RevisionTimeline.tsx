import type { Revision } from '../types';
import { RevisionItem } from './RevisionItem';

interface RevisionTimelineProps {
  revisions: Revision[];
  selectedRevision?: string | null;
  onSelect: (version: string) => void;
}

export const RevisionTimeline = ({ revisions, selectedRevision, onSelect }: RevisionTimelineProps) => {
  if (!revisions || revisions.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 text-sm sm:text-base">
      <div className="px-2 font-bold">리비전</div>
      <div className="flex flex-col gap-3">
        {revisions.map((rev) => (
          <RevisionItem
            key={rev.version}
            revision={rev}
            isSelected={selectedRevision === rev.version}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

