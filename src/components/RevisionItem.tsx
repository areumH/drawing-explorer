import { useState } from 'react';
import type { Revision } from '../types';

interface RevisionItemProps {
  revision: Revision;
  isSelected: boolean;
  onSelect: (version: string) => void;
}

export const RevisionItem = ({ revision, isSelected, onSelect }: RevisionItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const { version, date, description, changes } = revision;

  return (
    <div className="border border-gray-400 bg-white rounded-lg overflow-hidden">
      <div
        onClick={() => onSelect(version)}
        className={`flex items-center justify-between p-3 cursor-pointer transition
          ${isSelected ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-100'}`}
      >
        <div className="flex items-center gap-5 flex-1">
          <div className="text-sm sm:text-base font-medium">{version}</div>
          <div className="text-xs text-gray-500">{date}</div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((prev) => !prev);
          }}
          className="px-2 cursor-pointer"
        >
          {expanded ? '▲' : '▼'}
        </button>
      </div>

      {/* 설명 + 변경사항 영역 */}
      {expanded && (
        <div className="px-4 py-2">
          <p>{description}</p>
          {changes && changes.length > 0 && (
            <ul className="list-disc px-5 py-1 text-gray-700">
              {changes.map((change, idx) => (
                <li key={idx}>{change}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
