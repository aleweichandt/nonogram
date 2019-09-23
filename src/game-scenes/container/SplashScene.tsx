import {connect, MapDispatchToProps} from 'react-redux';

import {PACK_SELECTION} from '../../routes/module';
import {navigate} from '../../navigation';
import {SplashScreen} from '../ui';

type Props = {};
type DProps = {
  next: () => void;
};

const mapDispatchToProps: MapDispatchToProps<DProps, Props> = dispatch => ({
  next: () => dispatch(navigate({routeName: PACK_SELECTION})),
});

export default connect(
  null,
  mapDispatchToProps,
)(SplashScreen);
