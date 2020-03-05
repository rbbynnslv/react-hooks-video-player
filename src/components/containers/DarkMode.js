import React from 'react';
import { StyledDarkMode } from '../styles/styles';
import { Switch } from '@material-ui/core';

const DarkMode = ({ darkMode, darkModeCallback }) => {
  return (
    <StyledDarkMode>
      <span>Dark Mode</span>
      <Switch
        color="secondary"
        value="switch"
        checked={darkMode}
        onChange={darkModeCallback}
      />
    </StyledDarkMode>
  );
};
export default DarkMode;
