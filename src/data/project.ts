import metadata from './metadata.json';
import type { Project } from '../types';

// 데이터 객체
export const projectData = metadata as Project;

export function getDiscipline(project: Project, drawingId?: string | null, discipline?: string | null) {
  if (!drawingId || !discipline) return null;

  return project.drawings[drawingId]?.disciplines?.[discipline];
}
