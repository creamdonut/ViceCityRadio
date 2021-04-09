import React, { FC } from "react";

import "../../../App.css";

import * as Typed from "./Station.typed";

export const Station: FC<Typed.Props> = ({
  changeStation,
  stationName,
  logo,
  stationClass,
}) => {
  return (
    <div>
      <img
        className={stationClass}
        alt={stationName}
        src={logo}
        onClick={() => changeStation(stationName)}
      />
    </div>
  );
};
