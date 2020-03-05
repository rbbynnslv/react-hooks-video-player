import React from 'react';
import { StyledPlaylistItem } from '../styles/styles';

const PlaylistItem = ({ video, active, played }) => (
  <StyledPlaylistItem active={active} played={played}>
    <div className="vid-player-video-nr">{video.playlistId}</div>
    <div className="vid-player-video-name">{video.title}</div>
    <div className="vid-player-video-time">{video.duration}</div>
  </StyledPlaylistItem>
);

export default PlaylistItem;
