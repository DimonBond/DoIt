import React from 'react';
import ReactDom from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import Routes from './Routes';
import App from './shared/App';
import { configureStore, history } from './store/configureStore';
import './style/index.less';

ReactDom.render(
  <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <App>
        <Routes />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
