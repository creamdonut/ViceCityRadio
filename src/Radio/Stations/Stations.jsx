import React from "react";

import YouTube from "react-youtube";

export const Stations = ({ radioStation, radio }) => {
  const opts = {
    height: "0",
    width: "0",
    host: "https://www.youtube-nocookie.com",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const renderRadio = (name) => {
    switch (name) {
      case "flash":
        return (
          <YouTube id="player" ref={radio} videoId="DIcc0wHimtw" opts={opts} />
        );
      case "wildstyle":
        return (
          <YouTube id="player" ref={radio} videoId="0SXR99_ShJs" opts={opts} />
        );
      case "kchat":
        return (
          <YouTube id="player" ref={radio} videoId="ylIKhRUEiec" opts={opts} />
        );
      case "fever":
        return (
          <YouTube id="player" ref={radio} videoId="4owcb9AsK2w" opts={opts} />
        );
      case "vrock":
        return (
          <YouTube id="player" ref={radio} videoId="BwHLNmSrPq0" opts={opts} />
        );
      case "vcpr":
        return (
          <YouTube id="player" ref={radio} videoId="O6NoRNcu5Jk" opts={opts} />
        );
      case "espantoso":
        return (
          <YouTube id="player" ref={radio} videoId="rAWSt1t6nF4" opts={opts} />
        );
      case "emotion":
        return (
          <YouTube id="player" ref={radio} videoId="VzPG0O4jdjI" opts={opts} />
        );
      case "wave":
        return (
          <YouTube id="player" ref={radio} videoId="MzbYsoR9dPM" opts={opts} />
        );
      default:
        return <YouTube id="player" ref={radio} opts={opts} />;
    }
  };

  return (
    <>
      <div class="container">
        <div class="neon">VICE CITY </div>
        <div class="flux">RADIO </div>
      </div>
      <div>{renderRadio(radioStation)}</div>
    </>
  );
};
