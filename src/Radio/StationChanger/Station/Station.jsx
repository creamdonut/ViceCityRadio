import React from "react";

import "../../../App.css";

export const Station = ({ changeStation, stationName, logo, stationClass }) => {
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
