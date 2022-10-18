import { FC } from 'react';

import 'App.css';

import * as Typed from './Station.typed';

export const Station: FC<Typed.Props> = ({
  changeStation,
  stationName,
  stationClass,
}) => {
  return (
    <div
      onClick={() => changeStation(stationName)}
      className={`${stationName} base-logo`}
    />
  );
};
