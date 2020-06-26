import React, { useRef, useState, useEffect } from "react";

import { useTimer } from "use-timer";

import "../App.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { Stations } from "./Stations/Stations";
import { StationChanger } from "./StationChanger/StationChanger";

import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

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
  const classes = useStyles();

  const [value, setValue] = useState(50);

  const [isTurn, setIsTurn] = useState(false);

  const [radioStation, setRadioStation] = useState("");

  const { time, start, reset } = useTimer();

  const timecode = localStorage.getItem("timecode");

  useEffect(() => {
    start();
  }, []);

  if (time > 3000) {
    reset();
    start();
  }

  const radio = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    radio.current.internalPlayer.setVolume(value);
  };

  const radioSwitcher = () => {
    console.log(radio);
    if (isTurn === false) {
      radio.current.internalPlayer.playVideo();

      setIsTurn(true);
    } else {
      radio.current.internalPlayer.pauseVideo();
      setIsTurn(false);
    }
  };

  const changeStation = async (name) => {
    setRadioStation(name);

    setIsTurn(true);

    radio.current.internalPlayer.setVolume(0);

    setTimeout(() => {
      radio.current.internalPlayer.seekTo(time, true);
      radio.current.internalPlayer.setVolume(value);
    }, 1000);
  };

  window.addEventListener("beforeunload", (event) => {
    localStorage.setItem("timecode", time);
  });

  return (
    <div>
      <div className={"controls-container"}>
        <StationChanger
          changeStation={changeStation}
          setRadioStation={setRadioStation}
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

      <Stations time={time} radioStation={radioStation} radio={radio} />
    </div>
  );
};
