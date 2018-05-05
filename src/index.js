import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';

import Chessboard from './components/Chessboard';

const App = () => {
  return (
      <div>
        <Chessboard />
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app-container"));
