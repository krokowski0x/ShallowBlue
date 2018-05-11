import Chess from 'chess.js';
import { PIECE_MOVED } from '../actions/actions';

const chess = new Chess();

const initialState = {
  chess,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PIECE_MOVED:
      state.chess.move(action.where);
      return state;
    default:
      return state;
  }
}

export default reducer;
