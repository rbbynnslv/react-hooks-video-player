// Main Component
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledVidPlayer } from './components/styles/styles';
import Video from './components/containers/Video';
import Playlist from './components/containers/Playlist';

// Themes
const themeDark = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405C63',
  bgcolorPlayed: '#526D4E',
  border: 'none',
  borderPlayed: 'none',
  color: '#FFFFFF'
};

const themeLight = {
  bgcolor: '#FFFFFF',
  bgcolorItem: '#FFFFFF',
  bgcolorItemActive: '#80A7B1',
  bgcolorPlayed: '#7D9979',
  border: '1 px solid 353535',
  borderPlayed: 'none',
  color: '#353535'
};

// Data
const playlist = [
  {
    id: 'z-xkbNLIB5w',
    playlistId: 1,
    title: 'Web Design Tutorial',
    duration: '13:07',
    url: 'https://www.youtube.com/embed/z-xkbNLIB5w'
  },
  {
    id: 'wI1CWzNtE-M',
    playlistId: 2,
    title: 'JSON Crash Course',
    duration: '24:49',
    url: 'https://www.youtube.com/embed/wI1CWzNtE-M'
  },
  {
    id: 'BaJZC3zjHBQ',
    playlistId: 3,
    title: 'I Design A Website In 20 Minutes',
    duration: '21:11',
    url: 'https://www.youtube.com/embed/BaJZC3zjHBQ'
  },
  {
    id: 'FK4YusHIIj0',
    playlistId: 4,
    title: 'Design A Website In Under 1 Hour With Figma',
    duration: '47:45',
    url: 'https://www.youtube.com/embed/FK4YusHIIj0'
  },
  {
    id: 'u21W_tfPVrY',
    playlistId: 5,
    title: 'VS Code Top-Ten Pro Tips',
    duration: '9:35',
    url: 'https://www.youtube.com/embed/UX36flnDv-0'
  },
  {
    id: 'ebJ0XBOjowo',
    playlistId: 6,
    title: 'Finding A Web Developer Job With No Experience',
    duration: '18:27',
    url: 'https://www.youtube.com/embed/ebJ0XBOjowo'
  }
];

const VidPlayer = ({ match, location, history }) => {
  const [state, setState] = useState({
    videos: playlist,
    activeVideo: playlist[0].url,
    darkMode: true,
    playlistId: playlist.playlistId,
    autoplay: false
  });

  useEffect(() => {
    const videoId = match.params.activeVideo;
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        video => video.id === videoId
      );
      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay
      }));
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false
      });
    }
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos
  ]);

  const darkModeCallback = () => {
    setState({ ...state, darkMode: !state.darkMode });
  };

  const endCallback = () => {
    const videoId = match.params.activeVideo;
    const currentVideoIndex = state.videos.findIndex(
      video => video.id === videoId
    );
    const nextVideo =
      currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;
    history.push({
      pathname: `/${state.videos[nextVideo].id}`,
      autoplay: false
    });
  };

  const progressCallback = e => {
    if (e.playedSeconds > 10 && e.playedSeconds < 11) {
      const videos = [...state.videos];
      const playedVideo = videos.find(
        video => video.id === state.activeVideo.id
      );

      playedVideo.played = true;
      setState({
        ...state,
        videos
      });

      // setState({
      //   ...state,
      //   videos: state.videos.map(element => {
      //     return element.id === state.activeVideo.id
      //       ? { ...element, played: true }
      //       : element;
      //   })
      // });
    }
  };

  return (
    <ThemeProvider theme={state.darkMode ? themeDark : themeLight}>
      {state.videos !== null ? (
        <StyledVidPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            darkModeCallback={darkModeCallback}
            darkMode={state.darkMode}
          />
        </StyledVidPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default VidPlayer;
