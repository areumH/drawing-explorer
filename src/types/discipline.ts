import type { Revision } from './revision';
import type { Transform } from './drawing';

export interface Discipline {
  name: string;
}

export interface DrawingDiscipline {
  image?: string;
  imageTransform: Transform;
  polygon: {
    vertices: number[][];
    polygonTransform: Transform;
  };
  revisions?: Revision[];
}
