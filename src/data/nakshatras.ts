import { nakshatras1To9, type NakshatraData } from './nakshatras1';
import { nakshatras10To18 } from './nakshatras2';
import { nakshatras19To27 } from './nakshatras3';

export const nakshatras: NakshatraData[] = [
  ...nakshatras1To9,
  ...nakshatras10To18,
  ...nakshatras19To27
];

export type { NakshatraData };
