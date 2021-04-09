import React, { FC } from "react";

import { Station } from "./Station/Station";

import flashLogo from "../../logos/flash.png";
import wildstyleLogo from "../../logos/wildstyle.png";
import kchatLogo from "../../logos/kchat.svg";
import feverLogo from "../../logos/fever.png";
import vrockLogo from "../../logos/vrock.png";
import vcprLogo from "../../logos/vcpr.png";
import espantosoLogo from "../../logos/espantoso.svg";
import emotionLogo from "../../logos/emotion.png";
import waveLogo from "../../logos/wave.png";

import * as Typed from "./StationChanger.typed";

export const StationChanger: FC<Typed.Props> = ({
  changeStation,
  radioStation,
}) => {
  return (
    <div className={"stations-container"}>
      <div
        style={
          radioStation === "flash" ? { transform: "translateY(-20px)" } : {}
        }
        className={`station-logo-container`}
      >
        <Station
          changeStation={changeStation}
          stationName={"flash"}
          logo={flashLogo}
          stationClass={"station-logo"}
        />
      </div>
      <div
        style={
          radioStation === "wildstyle" ? { transform: "translateY(-20px)" } : {}
        }
        className={`station-logo-container ${
          radioStation === "wildstyle" ? "station-logo-container-pseudo" : ""
        }`}
      >
        <Station
          changeStation={changeStation}
          stationName={"wildstyle"}
          logo={wildstyleLogo}
          stationClass={"station-logo"}
        />
      </div>
      <div
        style={
          radioStation === "vrock" ? { transform: "translateY(-20px)" } : {}
        }
        className={`station-logo-container ${
          radioStation === "vrock" ? "station-logo-container-pseudo" : ""
        }`}
      >
        <Station
          changeStation={changeStation}
          stationName={"vrock"}
          logo={vrockLogo}
          stationClass={"station-logo"}
        />
      </div>
      <div
        style={
          radioStation === "kchat" ? { transform: "translateY(-20px)" } : {}
        }
        className={`station-logo-container ${
          radioStation === "kchat" ? "station-logo-container-pseudo" : ""
        }`}
      >
        <Station
          changeStation={changeStation}
          stationName={"kchat"}
          logo={kchatLogo}
          stationClass={"station-logo-kchat"}
        />
      </div>
      <div
        style={
          radioStation === "fever" ? { transform: "translateY(-20px)" } : {}
        }
        className={`station-logo-container ${
          radioStation === "fever" ? "station-logo-container-pseudo" : ""
        }`}
      >
        <Station
          changeStation={changeStation}
          stationName={"fever"}
          logo={feverLogo}
          stationClass={"station-logo"}
        />
      </div>

      <div
        style={
          radioStation === "vcpr" ? { transform: "translateY(-20px)" } : {}
        }
        className={`station-logo-container ${
          radioStation === "vcpr" ? "station-logo-container-pseudo" : ""
        }`}
      >
        <Station
          changeStation={changeStation}
          stationName={"vcpr"}
          logo={vcprLogo}
          stationClass={"station-logo"}
        />
      </div>
      <div
        style={
          radioStation === "espantoso" ? { transform: "translateY(-20px)" } : {}
        }
        className={`station-logo-container ${
          radioStation === "espantoso" ? "station-logo-container-pseudo" : ""
        }`}
      >
        <Station
          changeStation={changeStation}
          stationName={"espantoso"}
          logo={espantosoLogo}
          stationClass={"station-logo"}
        />
      </div>
      <div
        style={
          radioStation === "emotion" ? { transform: "translateY(-20px)" } : {}
        }
        className={`station-logo-container ${
          radioStation === "emotion" ? "station-logo-container-pseudo" : ""
        }`}
      >
        <Station
          changeStation={changeStation}
          stationName={"emotion"}
          logo={emotionLogo}
          stationClass={"station-logo-wide"}
        />
      </div>
      <div
        style={
          radioStation === "wave" ? { transform: "translateY(-20px)" } : {}
        }
        className={`station-logo-container ${
          radioStation === "wave" ? "station-logo-container-pseudo" : ""
        }`}
      >
        <Station
          changeStation={changeStation}
          stationName={"wave"}
          logo={waveLogo}
          stationClass={"station-logo-wide"}
        />
      </div>
    </div>
  );
};
