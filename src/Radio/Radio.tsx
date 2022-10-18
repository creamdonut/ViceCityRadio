import React, { useRef, useState, ChangeEvent } from 'react';

import '../App.css';

import { Stations } from './Stations/Stations';
import { StationChanger } from './StationChanger/StationChanger';

import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import YouTube from 'react-youtube';
import { StationCodes } from 'entities/StationCodes.ts';

const PrettoSlider = withStyles({
  root: {
    color: '#f40a35',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
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
  const [volume, setVolume] = useState<number>(50);

  const [isActive, setIsActive] = useState<boolean>(false);

  const [radioStation, setRadioStation] = useState(StationCodes.Fever);

  const startTime = useRef<number>(Date.now());

  const radio = useRef<YouTube | null>(null);

  const onVolumeChange = (event: ChangeEvent<{}>, value: number | number[]) => {
    if (typeof value !== 'number' || !radio.current) return;
    setVolume(value);

    radio.current.getInternalPlayer()?.setVolume(value);
  };

  const radioSwitcher = () => {
    if (radio.current === null) return;

    if (isActive === false) {
      radio.current.getInternalPlayer()?.playVideo();

      setIsActive(true);
    } else {
      radio.current.getInternalPlayer()?.pauseVideo();
      setIsActive(false);
    }
  };

  const changeStation = async (name: React.SetStateAction<StationCodes>) => {
    if (radio.current === null) return;

    setIsActive(true);
    setRadioStation(name);
  };

  return (
    <div>
      <div className={'controls-container'}>
        <StationChanger
          changeStation={changeStation}
          radioStation={radioStation}
        />
        <div className={'button-and-slider'}>
          <div>
            <PrettoSlider
              valueLabelDisplay='auto'
              aria-label='pretto slider'
              value={volume}
              onChange={onVolumeChange}
            />
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row', padding: '0 60px' }}
          >
            <Button
              onClick={radioSwitcher}
              variant='contained'
              color='secondary'
            >
              {isActive ? 'Turn Off' : 'Turn On'}
            </Button>
          </div>
        </div>
      </div>

      <Stations
        radioStation={radioStation}
        radio={radio}
        startTime={startTime.current}
      />
    </div>
  );
};
