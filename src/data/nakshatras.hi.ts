import { nakshatras1To9Hi } from './nakshatras1.hi';
import { nakshatras10To18Hi } from './nakshatras2.hi';
import { nakshatras19To27Hi } from './nakshatras3.hi';
import type { NakshatraData } from './nakshatras1';

export const nakshatrasHi: NakshatraData[] = [
  ...nakshatras1To9Hi,
  ...nakshatras10To18Hi,
  ...nakshatras19To27Hi
];
