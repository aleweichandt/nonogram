// @flow
import { createStackNavigator } from 'react-navigation';
import { SPLASH, GAME } from '../../routes';
import SplashScreen from '../../splash';
import GameScreen from '../../game-scene';

export default createStackNavigator({
  [SPLASH]: {
    screen: SplashScreen,
  },
  [GAME]: {
    screen: GameScreen,
  },
});
