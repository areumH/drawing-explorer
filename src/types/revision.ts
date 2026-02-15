import type { Polygon } from './discipline';
import type { Transform } from './drawing';

export interface Revision {
  version: string; // 리비전 버전명
  image: string; // 도면 이미지 파일명
  date: string; // 발행일
  description: string; // 리비전 설명
  changes: string[]; // 변경 내역 배열 (빈 배열 - 초기 설계)
  imageTransform?: Transform; // 리비전 이미지의 정렬 변환
  polygon?: Polygon; // 리비전 별로 관심 영역이 다른 경우의 폴리곤 데이터
}
