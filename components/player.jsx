import {
  Player,
  Video,
  DefaultUi,
  PlaybackControl,
  Controls,
  Scrim,
  ControlSpacer,
  MuteControl,
  TimeProgress,
  ScrubberControl,
  FullscreenControl,
  usePlayer,
} from "@vime/react";
import { useRef, useState, useEffect } from "react";
import Router from "next/router";

function VPlayer(props) {
  const reff = useRef(null);
  const player = usePlayer(reff);
  const [value, setValue] = useState(null);

  const enterFullscreen = () => {
    player.enterFullscreen();
  };
  const pausePlayer = () => {
    player.pause();
  };
  useEffect(() => {
    setValue(props.src);
  }, []);

  // Router.reload(window.location.pathname);
  return (
    <div className="w-33vw 2xl:w-36vw mx-auto pt-5">
      <Player ref={reff}>
        <Video crossOrigin="">
          <source data-src={value} type="video/mp4" />
        </Video>
        <DefaultUi noControls>
          <Scrim />

          <Controls fullWidth pin="topLeft" hideWhenPaused>
            <ControlSpacer />
            <MuteControl />
          </Controls>

          <Controls pin="center" justify="center">
            <PlaybackControl
              // onClick={enterFullscreen}
              hideTooltip
              style={{ "--vm-control-scale": 4 }}
            />
          </Controls>

          <Controls fullWidth pin="bottomLeft" hideWhenPaused>
            <ControlSpacer />
            <TimeProgress />
            <FullscreenControl onClick={pausePlayer} />
          </Controls>
          <Controls fullWidth hideWhenPaused>
            <ScrubberControl />
          </Controls>
        </DefaultUi>
      </Player>
    </div>
  );
}

export default VPlayer;
