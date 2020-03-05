import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VidPlayer from './VidPlayer';
import { GlobalStyle } from './components/styles/styles';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={VidPlayer} />
      <Route exact path="/:activeVideo" component={VidPlayer} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
