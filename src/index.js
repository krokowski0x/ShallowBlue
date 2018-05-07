import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Game from './containers/Game';
import reducer from './reducers/MoveReducer';
import styles from './styles.scss';

const store = createStore(
  reducer
);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('app-container'),
);
