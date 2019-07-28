import { connect } from 'react-redux';

import { MENU } from '../../routes/module';
import { navigate } from '../../navigation';
import SplashScreen from '../ui';

const mapDispatchToProps = dispatch => ({
  next: () => dispatch(navigate({ routeName: MENU })),
});

export default connect(null, mapDispatchToProps)(SplashScreen);
