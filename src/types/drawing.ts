import type { DrawingDiscipline } from './discipline';

export interface Drawing {
  id: string; // 도면 식별자
  name: string; // 도면 이름
  image: string; // 도면 이미지 파일명
  parent: string | null; // 상위 도면 번호
  position: Position | null; // 상위 도면 위에서 도면이 차지하는 영역
  disciplines?: Record<string, DrawingDiscipline>; // 도면에 속한 공종별 데이터
}

export interface Transform {
  relativeTo?: string; // 기준이 되는 이미지 파일명 (이 이미지 위에 오버레이, position 레벨에서는 parent가 대신함)
  x: number; // 앵커 포인트 x 좌표
  y: number; // 앵커 포인트 y 좌표
  scale: number; // 오버레이 이미지의 확대/축소 비율
  rotation: number; // 회전 각도 (라디안, 0 = 회전 없음)
}

export interface Position {
  vertices: number[][]; // 다각형 꼭짓점 좌표 배열 (상위 도면 이미지의 픽셀 좌표)
  imageTransform: Transform; // 한 이미지를 기준 이미지 위에 올바르게 겹쳐 놓기 위한 변환 파라미터
}
