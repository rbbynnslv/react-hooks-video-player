import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-size: 20px;
        font-family: Lucida Console, Monaco, monospace;
    }
`;

export const StyledPlaylist = styled.div`
  webkit-box-flex: 1;
  -ms-flex: 1 1 450px;
  flex: 1 1 450px;
  overflow: hidden;
  color: #000000;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`;

export const StyledPlaylistItems = styled.div`
  padding: 0 20px;
  overflow-y: auto;
  height: 28vw;
  max-height: 500px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledPlaylistItem = styled.div`
  font-family: Lucida Console, Monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: none;
  border: ${props => (props.active ? '2px dotted #696969' : 'none')};
  font-size: 25px;
  color: ${props => props.theme.color};
  min-height: 50px;
  padding: 10px 20px;
  margin: 0 0 10px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${props => (props.active ? '5px' : '0')};
  cursor: pointer;
  position: relative;
  ::before {
    display: ${props => (props.active || !props.played ? 'none' : 'block')};
    content: '';
    width: 10px;
    min-height: 10px;
    background: #409f4e;
    border-radius: 50px;
    position: absolute;
    left: 0;
    top: 19px;
  }
  .vid-player-video-nr {
    flex-grow: 1; /* default 0 */
    max-width: 30px;
    padding-right: 20px;
    border-right: 2px solid #565656;
  }
  .vid-player-video-name,
  .vid-player-video-name a {
    flex-grow: 10; /* default 0 */
    padding: 0 0 0 10px;
    color: ${props => props.theme.color};
    text-align: left;
    text-decoration: none;
    display: block;
  }
  .vid-player-video-time {
    background: #565656;
    min-width: 70px;
    color: #fff;
    font-size: 0.8em;
    padding: 0px 5px;
    height: 25px;
    text-align: center;
    border-radius: 5px;
    margin: 0 0 0 5px;
  }
  .vid-player-video-download {
    flex-grow: 1; /* default 0 */
    color: ${props => (props.played ? '#fff' : props.theme.color)};
    margin: 0 0 0 20px;
    max-width: 30px;
    padding: 0 20px;
    border-left: 2px solid #565656;
    font-family: Lucida Console, Monaco, monospace;
    font-style: normal;
    font-weight: normal;
  }
  .vid-player-video-download a {
    color: ${props =>
      props.played && !props.active ? '#fff' : props.theme.color};
  }
  .active {
    opacity: 0.1;
  }
`;

export const StyledVidPlayer = styled.div`
  background: ${props => props.theme.bgcolor}; /* #353535; */
  border: ${props => props.theme.border};
  max-width: 1800px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  max-height: 863px;
  transition: all 0.5s ease;
  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`;

export const StyledDarkMode = styled.div`
  font-family: Lucida Console, Monaco, monospace;
  font-weight: 800;
  font-size: 1.6em;
  color: ${props => props.theme.color};
  padding: 0;
  margin: 20px;
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
  }
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: #3d5138;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 30px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`;

export const StyledPlaylistHeader = styled.div`
  background: #4b5556;
  font-family: Lucida Console, Monaco, monospace;
  font-weight: 800;
  font-size: 25px;
  color: #fff;
  padding: 0 20px;
  margin: 0 0 20px 0;
  min-height: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledJourney = styled.div`
  background: #565656;
  font-size: 20px;
  padding: 2px 5px;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;

export const StyledVideoWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;

export const StyledVideo = styled.div`
  position: relative;
  -webkit-box-flex: 2;
  -ms-flex: 2 0 900px;
  flex: 2 0 900px;
  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`;
