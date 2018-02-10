import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link } from "react-router-dom";
import createHistory from 'history/createHashHistory'

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.scss'

const customeHistory = createHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={customeHistory}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({}) => (
  <div>
    <h2>Topics</h2>
  </div>
);



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
