import type { DrawingDiscipline } from './discipline';

export interface Drawing {
  id: string;
  name: string;
  image: string;
  parent: string | null;
  position: Position | null;
  disciplines?: Record<string, DrawingDiscipline>;
}

export interface Position {
  vertices: number[][];
  imageTransform: Transform;
}

export interface Transform {
  relativeTo?: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}
