import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Container } from 'react-materialize';
import promiseMiddleware from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router-dom';

import Navigation from './Navigation';
import DeclaredRoutes from './DeclaredRoutes';

import combinedReducers from './combinedReducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancers = composeEnhancers(
  applyMiddleware(thunkMiddleware, promiseMiddleware())
);

const history = createBrowserHistory();
let store = createStore(combinedReducers, enhancers);

const Main = () => (
  <Provider store={store}>
    <Router history={history} routes={DeclaredRoutes}>
      <div>
        <Navigation />
        <Container>
          <DeclaredRoutes />
        </Container>
      </div>
    </Router>
  </Provider>
);

export { Main };
export default Main;
