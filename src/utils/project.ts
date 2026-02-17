import type { Project } from '../types';
import type { Selection } from '../App';

// 공종 가져오기
export function getDiscipline(project: Project, drawingId?: string | null, discipline?: string | null) {
  if (!drawingId || !discipline) return null;

  return project.drawings[drawingId]?.disciplines?.[discipline];
}

// 이미지 가져오기
export function getCurrentImage(project: Project, selection: Selection): string | null {
  // 도면 선택 안됨
  if (!selection.drawingId) return null;

  const drawing = project.drawings[selection.drawingId];
  if (!drawing) return null;

  const discipline = selection.discipline ? drawing.disciplines?.[selection.discipline] : null;

  // revision image
  if (selection.revisionVersion && discipline) {
    const region = selection.region ? discipline.regions?.[selection.region] : null;
    const revisions = region?.revisions ?? discipline.revisions ?? [];
    const revision = revisions.find((r) => r.version === selection.revisionVersion);

    if (revision?.image) return revision.image;
  }

  // discipline image
  if (discipline?.image) {
    return discipline.image;
  }

  // drawing image
  return drawing.image ?? null;
}
