import metadata from './metadata.json';
import type { Project } from '../types';

// 데이터 객체
export const projectData = metadata as Project;

// 도면 가져오기
export function getDrawing(project: Project, drawingId: string) {
  return project.drawings[drawingId];
}

// 공종 가져오기
export function getDiscipline(project: Project, drawingId: string, disciplineId: string) {
  return project.drawings[drawingId]?.disciplines?.[disciplineId];
}
