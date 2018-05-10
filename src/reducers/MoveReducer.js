import Chess from 'chess.js';
import { PIECE_MOVED } from '../actions/actions';

const chess = new Chess();

const initialState = {
  title: 'ShallowBlue.js',
  game: chess,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PIECE_MOVED:
      return state.game.move();
    default:
      return state;
  }
}

export default reducer;
