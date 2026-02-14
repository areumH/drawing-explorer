import type { Drawing } from './drawing';
import type { Discipline } from './discipline';

export interface Project {
  project: {
    name: string; // 프로젝트 이름
    unit: string; // 프로젝트 좌표 단위
  };
  disciplines: Discipline[]; // 사용되는 공종 목록
  drawings: Record<string, Drawing>; // 도면 데이터 (키 - 도면 번호)
}
