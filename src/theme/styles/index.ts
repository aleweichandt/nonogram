import {
  // @ts-ignore:
  getTheme, variables,
} from 'native-base';
import light from './light';

export default getTheme({
  ...variables,
  ...light,
});
