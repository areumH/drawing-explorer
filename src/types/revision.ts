import type { Transform } from './drawing';

export interface Revision {
  version: string;
  image: string;
  date: string;
  description: string;
  changes: string[];
  imageTransform?: Transform;
}
