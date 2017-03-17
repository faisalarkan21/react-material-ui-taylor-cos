import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';

import TaylorCos from './taylorApp/TaylorCos.js';
import TaylorSin from './taylorApp/TaylorSin.js';
import TaylorTan from './taylorApp/TaylorTan.js';
import TaylorEx from './taylorApp/TaylorEx.js';
import TaylorTurun from './taylorApp/TaylorTurun.js';

import HalPilihan from './taylorApp/HalPilihan.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const Routes = (props) => (
  <Router {...props}>

    <Route path="/" component={HalPilihan}/>
   

    <Route path="/cos" component={TaylorCos}/>
    <Route path="/sin" component={TaylorSin}/>
    <Route path="/tan" component={TaylorTan}/>
    <Route path="/ex" component={TaylorEx}/>
    <Route path="/turunan" component={TaylorTurun}/>
  </Router>
);

export default Routes;