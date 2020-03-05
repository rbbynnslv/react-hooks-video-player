import React from 'react';
import PlaylistItem from './PlaylistItem';
import { StyledPlaylistItems } from '../styles/styles';
import withLink from '../path/withLink';

const PlaylistItemWithLink = withLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => (
  <StyledPlaylistItems>
    {videos.map(v => (
      <PlaylistItemWithLink
        key={v.id}
        video={v}
        active={v.id === active.id ? true : false}
        played={v.played}
      />
    ))}
  </StyledPlaylistItems>
);

export default PlaylistItems;
