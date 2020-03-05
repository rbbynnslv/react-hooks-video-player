import React from 'react';
import ReactPlayer from 'react-player';
import { StyledVideoWrapper, StyledVideo } from '../styles/styles';

const Video = ({ active, autoplay, endCallback, progressCallback }) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: '0' }}
        playing={autoplay}
        controls={true}
        url={active.url}
        onEnded={endCallback}
        onProgress={progressCallback}
      />
    </StyledVideoWrapper>
  </StyledVideo>
);

export default Video;
