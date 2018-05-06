import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import App from './components/App';
import Search from './containers/Search';

import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import './components/bundle.scss';
import initstate from './initial_state';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers,initstate, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
 <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
   <Route path="/" component={App}>
     <IndexRoute component={Search} />;
   </Route>
     </Router>
  </Provider>
  , document.getElementById('react-root'));
