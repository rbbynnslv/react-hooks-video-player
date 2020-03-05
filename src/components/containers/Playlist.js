import React from 'react';

import PlaylistHeader from './PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import DarkMode from './DarkMode';
import { StyledPlaylist } from '../styles/styles';

const Playlist = ({ videos, active, darkModeCallback, darkMode }) => (
  <StyledPlaylist>
    <DarkMode darkModeCallback={darkModeCallback} darkMode={darkMode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
);

export default Playlist;
