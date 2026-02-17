import { useState } from 'react';
import type { Revision } from '../types';

interface RevisionItemProps {
  revision: Revision;
  isSelected: boolean;
  onSelect: (version: string) => void;
}

export const RevisionItem = ({ revision, isSelected, onSelect }: RevisionItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-400 bg-white rounded-lg overflow-hidden">
      <div
        className={`flex items-center justify-between p-3 cursor-pointer transition
          ${isSelected ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-100'}`}
      >
        <div className="flex items-center gap-5 flex-1" onClick={() => onSelect(revision.version)}>
          <div className="text-base font-medium">{revision.version}</div>
          <div className="text-xs text-gray-500">{revision.date}</div>
        </div>

        {revision.changes.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((prev) => !prev);
            }}
            className="px-2 cursor-pointer"
          >
            {expanded ? '▲' : '▼'}
          </button>
        )}
      </div>

      {/* 변경사항 영역 */}
      {expanded && revision.changes && revision.changes.length > 0 && (
        <div className="px-10 py-3 text-gray-700">
          <ul className="list-disc">
            {revision.changes.map((change, idx) => (
              <li key={idx}>{change}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
