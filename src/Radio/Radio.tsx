import React, { useRef, useState, useEffect, ChangeEvent } from "react";

import { useTimer } from "use-timer";

import "../App.css";

import { Stations } from "./Stations/Stations";
import { StationChanger } from "./StationChanger/StationChanger";

import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import YouTube from "react-youtube";

const PrettoSlider = withStyles({
  root: {
    color: "#f40a35",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export const Radio = () => {
  const [value, setValue] = useState<number>(50);

  const [isTurn, setIsTurn] = useState<boolean>(false);

  const [radioStation, setRadioStation] = useState<string>("");

  const { time, start, reset } = useTimer();

  useEffect(() => {
    start();
  }, [start]);

  if (time > 3000) {
    reset();
    start();
  }

  const radio = useRef<YouTube | null>(null);

  const handleChange = (event: ChangeEvent<{}>, value: number | number[]) => {
    if (typeof value !== "number") return;
    setValue(value);
    if (radio.current !== null) return;
    // @ts-ignore
    radio?.current?.internalPlayer?.setVolume(value);
  };

  const radioSwitcher = () => {
    if (radio.current === null) return;

    if (isTurn === false) {
      // @ts-ignore
      radio?.current?.internalPlayer.playVideo();

      setIsTurn(true);
    } else {
      // @ts-ignore
      radio?.current?.internalPlayer.pauseVideo();
      setIsTurn(false);
    }
  };

  const changeStation = async (name: React.SetStateAction<string>) => {
    if (radio.current === null) return;

    setRadioStation(name);

    setIsTurn(true);
    // @ts-ignore
    radio?.current?.internalPlayer.setVolume(0);

    setTimeout(() => {
      // @ts-ignore
      radio?.current?.internalPlayer.seekTo(time, true);

      // @ts-ignore
      radio?.current?.internalPlayer.setVolume(value);
    }, 1000);
  };

  return (
    <div>
      <div className={"controls-container"}>
        <StationChanger
          changeStation={changeStation}
          radioStation={radioStation}
        ></StationChanger>
        <div className={"button-and-slider"}>
          <div>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              value={value}
              onChange={handleChange}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", padding: "0 60px" }}
          >
            <Button
              onClick={radioSwitcher}
              variant="contained"
              color="secondary"
            >
              {isTurn ? "Turn Off" : "Turn On"}
            </Button>
          </div>
        </div>
      </div>

      <Stations radioStation={radioStation} radio={radio} />
    </div>
  );
};
