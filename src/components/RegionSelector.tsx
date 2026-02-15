import type { Project } from '../types/project';
import type { Selection } from '../App';
import { getDiscipline } from '../data/project';
import Chip from './Chip';

interface RegionSelectorProps {
  project: Project;
  selection: Selection;
  setSelection: React.Dispatch<React.SetStateAction<Selection>>;
}

const RegionSelector = ({ project, selection, setSelection }: RegionSelectorProps) => {
  // 상위 목록이 선택되지 않은 상태
  if (!selection.drawingId || !selection.discipline) return null;
  const disciplineData = getDiscipline(project, selection.drawingId, selection.discipline);
  if (!disciplineData) return null;

  // 전체 도면에 대한 revision 존재
  const hasWholeRevisions = disciplineData.revisions && disciplineData.revisions.length > 0;

  // 관심 영역에 대한 revision 존재
  const regionKeys = disciplineData.regions ? Object.keys(disciplineData.regions) : [];
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
              revision: null, // region 바뀌면 revision 초기화
            }))
          }
        />
      ))}
    </div>
  );
};

export default RegionSelector;
