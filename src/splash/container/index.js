// @flow
import { connect } from 'react-redux';

import { GAME } from '../../routes/module';
import { navigate } from '../../navigation';
import SplashScreen from '../ui';

const mapDispatchToProps = dispatch => ({
  next: () => dispatch(navigate({ routeName: GAME })),
});

export default connect(null, mapDispatchToProps)(SplashScreen);
