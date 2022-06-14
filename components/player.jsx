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
} from "@vime/react";
import { useRef } from "react";

function VPlayer(props) {
  const player = useRef(null);
  return (
    <div className="w-33vw xl:w-36vw mx-auto pt-5">
      <Player ref={player}>
        <Video crossOrigin="">
          <source data-src={props.src} type="video/mp4" />
        </Video>
        <DefaultUi noControls>
          <Scrim />

          <Controls fullWidth pin="topLeft" hideWhenPaused>
            <ControlSpacer />
            <MuteControl />
          </Controls>

          <Controls pin="center" justify="center">
            <PlaybackControl hideTooltip style={{ "--vm-control-scale": 4 }} />
          </Controls>

          <Controls fullWidth pin="bottomLeft" hideWhenPaused>
            <ControlSpacer />
            <TimeProgress />
            <FullscreenControl />
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
