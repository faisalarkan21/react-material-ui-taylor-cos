import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';

import Taylor from './taylorApp/Taylor.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const Routes = (props) => (
  <Router {...props}>

    <Route path="/" component={Taylor}/>

    

  </Router>
);

export default Routes;