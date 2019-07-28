import { combineReducers } from 'redux';
import { reducer as navigation } from '../navigation';
import { reducer as game } from '../game';

export default combineReducers({
  ...navigation,
  ...game,
});
