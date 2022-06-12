import {
  Player,
  Video,
  DefaultUi,
  DefaultControls,
  PlaybackControl,
  Controls,
  Scrim,
  ControlSpacer,
  MuteControl,
  TimeProgress,
  ScrubberControl,
} from "@vime/react";
import { useRef } from "react";

function VPlayer() {
  const player = useRef(null);
  console.log(player);
  return (
    <div className="h-max-100">
      <Player ref={player}>
        <Video crossOrigin="">
          <source data-src="/Help_Stop_the_Virus.mp4" type="video/mp4" />
        </Video>
        <DefaultUi noControls>
          <Scrim />

          <Controls fullWidth pin="topLeft" hideWhenPaused>
            <ControlSpacer />
            <MuteControl />
          </Controls>

          <Controls pin="center" justify="center">
            <PlaybackControl hideTooltip style={{ "--vm-control-scale": 5 }} />
          </Controls>

          <Controls fullWidth pin="bottomLeft" hideWhenPaused>
            <ControlSpacer />
            <TimeProgress />
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
