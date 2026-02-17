import type { Selection } from '../App';
import type { DrawingDiscipline } from '../types';

interface RegionSelectorProps {
  discipline: DrawingDiscipline | null | undefined;
  selection: Selection;
  setSelection: React.Dispatch<React.SetStateAction<Selection>>;
}

export const RegionSelector = ({ discipline, selection, setSelection }: RegionSelectorProps) => {
  // 상위 목록이 선택되지 않은 상태
  if (!discipline) return null;

  // 전체 도면에 대한 revision 존재
  const hasWholeRevisions = discipline.revisions && discipline.revisions.length > 0;

  // 관심 영역에 대한 revision 존재
  const regionKeys = discipline.regions ? Object.keys(discipline.regions) : [];
  const hasRegionRevisions = regionKeys.length > 0;

  // revision 자체가 존재하지 않음
  if (!hasWholeRevisions && !hasRegionRevisions) return null;

  const regionOptions = [...(hasWholeRevisions ? ['전체'] : []), ...(hasRegionRevisions ? regionKeys : [])];

  return (
    <div className="flex flex-col gap-2 text-sm sm:text-base">
      {regionOptions.length > 0 && (
        <>
          <div className="px-2 font-bold">관심 영역</div>
          <select
            value={selection.region ?? ''}
            onChange={(e) =>
              setSelection((prev) => ({
                ...prev,
                region: e.target.value || null,
                revisionVersion: null,
              }))
            }
            className="w-full border border-gray-300 rounded-md p-2 bg-white cursor-pointer"
          >
            <option value="">관심 영역 선택</option>
            {regionOptions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};
