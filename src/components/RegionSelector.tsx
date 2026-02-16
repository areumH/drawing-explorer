import type { Selection } from '../App';
import type { DrawingDiscipline } from '../types';
import Chip from './Chip';

interface RegionSelectorProps {
  discipline: DrawingDiscipline | null | undefined;
  selection: Selection;
  setSelection: React.Dispatch<React.SetStateAction<Selection>>;
}

const RegionSelector = ({ discipline, selection, setSelection }: RegionSelectorProps) => {
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
    <div className="flex gap-2 flex-wrap">
      {regionOptions.map((region) => (
        <Chip
          key={region}
          label={region}
          selected={selection.region === region}
          onClick={() =>
            setSelection((prev) => ({
              ...prev,
              region,
              revisionVersion: null, // region 바뀌면 revision 초기화
            }))
          }
        />
      ))}
    </div>
  );
};

export default RegionSelector;
