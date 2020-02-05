import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Hyp1 from './pages/hyp1';
import Hyp2 from './pages/hyp2';
import Hyp3 from './pages/hyp3';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/hyp1" component={ Hyp1 } />
        <Route path="/hyp2" component={ Hyp2 } />
        <Route path="/hyp3" component={ Hyp3 } />
        <Route component={ Home } />
      </Switch>
    </Router>,
    document.getElementById('root'));
