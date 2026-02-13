import type { Drawing } from './drawing';
import type { Discipline } from './discipline';

export interface Project {
  project: {
    name: string;
    unit: string;
  };
  disciplines: Discipline[];
  drawings: Record<string, Drawing>;
}
