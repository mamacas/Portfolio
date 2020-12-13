import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import menuchoice from './menuchoice.js';

let reducers = combineReducers({
  menuchoice,
});

const store = () => {
  return createStore(reducers, composeWithDevTools (applyMiddleware(thunk)));
};

export default store();