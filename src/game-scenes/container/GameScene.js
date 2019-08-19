// @flow
import { connect } from 'react-redux';
import { GameScreen } from '../ui';
import { initGame } from '../../game';
import { TEST_BOARD } from '../const';

const mapDispatchToProps = dispatch => ({
  initGame: () => { dispatch(initGame(TEST_BOARD)); },
});

export default connect(undefined, mapDispatchToProps)(GameScreen);
