import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import createHistory from 'history/createHashHistory'

import Home from './components/Home';

// style

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.scss'

const customHistory = createHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={customHistory}>
        <div className="MainContent">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
