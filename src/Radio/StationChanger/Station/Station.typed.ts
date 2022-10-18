import { StationCodes } from 'entities/StationCodes.ts';

export interface Props {
  changeStation: (value: StationCodes) => void;
  stationName: StationCodes;
  stationClass: string;
}
