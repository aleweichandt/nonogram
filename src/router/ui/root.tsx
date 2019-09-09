import {createStackNavigator} from 'react-navigation';
import {SPLASH, GAME, PACK_SELECTION, GAME_SELECTION} from '../../routes';
import {
  GameScene,
  SplashScene,
  PackSelectionScene,
  GameSelectionScene,
} from '../../game-scenes';

export default createStackNavigator({
  [SPLASH]: {
    screen: SplashScene,
  },
  [PACK_SELECTION]: {
    screen: PackSelectionScene,
  },
  [GAME_SELECTION]: {
    screen: GameSelectionScene,
  },
  [GAME]: {
    screen: GameScene,
  },
});
