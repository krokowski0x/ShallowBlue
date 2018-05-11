import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moved } from '../actions/actions';

import Chessboard from '../components/Chessboard';

const mapStateToProps = state => ({
  chess: state.chess,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ moved }, dispatch);
}

const Game = connect(mapStateToProps, mapDispatchToProps)(Chessboard);
export default Game;
