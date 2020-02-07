import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import './scss/styles.scss';
// import ReactGA from 'react-ga';
import Home from './pages/home';
import Hyp1 from './pages/hyp1';
import Hyp2 from './pages/hyp2';
import Hyp3 from './pages/hyp3';
import Hyp4 from './pages/hyp4';
import Hyp5 from './pages/hyp5';
import Header from './components/header/header';
// import TagManager from 'react-gtm-module';

// const tagManagerArgs = {
//   gtmId: 'GTM-55PQJ8C'
// }

// TagManager.initialize(tagManagerArgs)

// Initialize google analytics
// ReactGA.initialize("UA-157900850-1");

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/hyp1" component={ Hyp1 } />
        <Route path="/hyp2" component={ Hyp2 } />
        <Route path="/hyp3" component={ Hyp3 } />
        <Route path="/hyp4" component={ Hyp4 } />
        <Route path="/hyp5" component={ Hyp5 } />
        <Route component={ Home } />
      </Switch>
    </Router>,
    document.getElementById('root'));
