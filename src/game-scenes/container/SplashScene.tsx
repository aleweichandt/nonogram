import {Dispatch} from 'react';
import {connect} from 'react-redux';

import {PACK_SELECTION} from '../../routes/module';
import {navigate} from '../../navigation';
import {SplashScreen} from '../ui';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  next: () => dispatch(navigate({routeName: PACK_SELECTION})),
});

export default connect(
  null,
  mapDispatchToProps,
)(SplashScreen);
