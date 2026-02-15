import type { Revision } from '../types';
import RevisionItem from './RevisionItem';

interface RevisionTimelineProps {
  revisions: Revision[];
  selectedRevision?: string | null;
  onSelect: (version: string) => void;
}

const RevisionTimeline = ({ revisions, selectedRevision, onSelect }: RevisionTimelineProps) => {
  return (
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
  );
};

export default RevisionTimeline;
