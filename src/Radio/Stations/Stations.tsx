import { FC } from 'react';

import * as Typed from './Stations.typed';

import YouTube, { YouTubeProps } from 'react-youtube';
import type { Options } from 'youtube-player/dist/types';

import { YoutubeCodes } from 'entities/YoutubeCodes.ts';

export const Stations: FC<Typed.Props> = ({
  radioStation,
  radio,
  startTime,
}) => {
  const opts = {
    height: '0',
    width: '0',
    host: 'https://www.youtube-nocookie.com',
    playerVars: {
      autoplay: 1,
    },
  } as Options;

  const onStationChange: YouTubeProps['onReady'] = (event) => {
    const difference = Math.floor((Date.now() - startTime) / 1000);

    setTimeout(() => {
      event.target.seekTo(difference, true);
    }, 700);
  };

  return (
    <>
      <div className='container'>
        <div className='neon'>VICE CITY </div>
        <div className='flux'>RADIO </div>
      </div>
      <div>
        <YouTube
          id='player'
          videoId={YoutubeCodes[radioStation]}
          ref={radio}
          opts={opts}
          onReady={onStationChange}
        />
      </div>
    </>
  );
};
