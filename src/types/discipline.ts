import type { Revision } from './revision';
import type { Transform } from './drawing';

export interface Discipline {
  name: string;
}

export interface Polygon {
  vertices: number[][]; // 영역 다각형 꼭짓점 좌표
  polygonTransform: Transform; // 폴리곤을 이미지 위에 렌더링하기 위한 변환
}

export interface Region {
  polygon: Polygon; // 해당 영역의 폴리곤
  revisions: Revision[]; // 해당 영역의 리비전 배열
}

export interface DrawingDiscipline {
  image?: string; // 공종 자체 도면 이미지
  imageTransform: Transform; // relativeTo로 기준 도면 명시
  polygon: Polygon; // 건물 도면 내에서 이 공종이 다루는 관심 영역
  regions?: Record<string, Region>; // 하위 영역 분할
  revisions?: Revision[]; // 리비전 이력 배열
}
