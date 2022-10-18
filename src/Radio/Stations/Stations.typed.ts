import { StationCodes } from 'entities/StationCodes.ts';
import YouTube from 'react-youtube';

export interface Props {
  radioStation: StationCodes;
  radio: React.RefObject<YouTube>;
  startTime: number;
}
