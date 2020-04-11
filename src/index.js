import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from 'hoc/App/App';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home';
import MFFactory from './microfrontend/Factory/MicroFrontendFactory';

const AppWrapper = ({ history }) => {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/test"
            component={() => (
              <MFFactory
                host={process.env.REACT_APP_EXTERNAL_APP_1_HOST}
                name={process.env.REACT_APP_EXTERNAL_APP_1_NAME}
              />
            )}
          />
        </Switch>
      </App>
    </Router>
  );
};

// render MF
window.renderMFContainer = (containerId, props) => {
  ReactDOM.render(
    <React.StrictMode>
      <AppWrapper {...props} />
    </React.StrictMode>,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

// unmount MF
window.unmountMFContainer = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// if not a MF
if (!document.getElementById(process.env.REACT_APP_NAME)) {
  window.renderMFContainer('root', {
    history: createBrowserHistory(),
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
