import Chess from 'chess.js';
const chess = new Chess();

const initialState = {
  title: 'ShallowBlue.js',
  game: chess,
};

function reducer(state = initialState) {
  return state;
}

export default reducer;
