import React from 'react';
import { StyledPlaylistHeader, StyledJourney } from '../styles/styles';

const PlaylistHeader = ({ active, total }) => (
  <StyledPlaylistHeader>
    <p>{active.title}</p>
    <StyledJourney>
      {active.playlistId} / {total}
    </StyledJourney>
  </StyledPlaylistHeader>
);

export default PlaylistHeader;
