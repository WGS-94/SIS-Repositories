import React from 'react';

import { BrowserRouter as Router, Switch } from "react-router-dom";

import Route from "../routes/PrivateRoutes";

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Router>
       <Switch>
         <Route path="/" exact component={SignIn} />
         <Route path="/signUp" component={SignUp} />
         <Route path="/home" component={Home} />
       </Switch>
    </Router>
  )
}