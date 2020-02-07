import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch} from 'react-router-dom';
import './scss/styles.scss';
import ReactGA from 'react-ga';
import Home from './pages/home';
import Hyp1 from './pages/hyp1';
import Hyp2 from './pages/hyp2';
import Hyp3 from './pages/hyp3';
import Hyp4 from './pages/hyp4';
import Header from './components/header/header';

// Initialize google analytics
ReactGA.initialize("UA-157900850-1");

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/hyp1" component={ Hyp1 } />
        <Route path="/hyp2" component={ Hyp2 } />
        <Route path="/hyp3" component={ Hyp3 } />
        <Route path="/hyp4" component={ Hyp4 } />
        <Route component={ Home } />
      </Switch>
    </Router>,
    document.getElementById('root'));
