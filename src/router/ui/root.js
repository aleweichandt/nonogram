// @flow
import { createStackNavigator } from 'react-navigation';
import { SPLASH, GAME } from '../../routes';
import { GameScene, SplashScene } from '../../game-scenes';

export default createStackNavigator({
  [SPLASH]: {
    screen: SplashScene,
  },
  [GAME]: {
    screen: GameScene,
  },
});
