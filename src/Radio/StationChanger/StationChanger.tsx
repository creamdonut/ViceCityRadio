import { StationCodes } from 'entities/StationCodes.ts';
import { FC } from 'react';

import { Station } from './Station/Station';

import * as Typed from './StationChanger.typed';

const stationsArray = Object.values(StationCodes);

export const StationChanger: FC<Typed.Props> = ({
  changeStation,
  radioStation,
}) => {
  return (
    <div className={'stations-container'}>
      {stationsArray.map((station) => {
        return (
          <div
            key={station}
            style={
              radioStation === station ? { transform: 'translateY(-20px)' } : {}
            }
            className={`station-logo-container ${
              radioStation === station && 'station-active'
            }`}
          >
            <Station
              changeStation={changeStation}
              stationName={station}
              stationClass={'station-logo'}
            />
          </div>
        );
      })}
    </div>
  );
};
