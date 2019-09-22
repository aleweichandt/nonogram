import {combineReducers} from 'redux';
import {reducer as navigation} from '../navigation';
import {reducer as game} from '../board';
import {reducer as gameSelection} from '../game-selection';

export default combineReducers({
  ...navigation,
  ...game,
  ...gameSelection,
});
