// @flow
import { createStackNavigator } from 'react-navigation';
import { SPLASH, MENU } from '../../routes';
import SplashScreen from '../../splash';

export default createStackNavigator({
  [SPLASH]: {
    screen: SplashScreen,
  },
  [MENU]: {
    screen: SplashScreen,
  },
});
