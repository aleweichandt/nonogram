import {connect, MapDispatchToProps} from 'react-redux';
import {NavigationContainerComponent} from 'react-navigation';
import AppContainer from '../ui';
import {setNavigation} from '../../navigation/module';

type Props = {};
type DProps = {
  setRef: (ref: NavigationContainerComponent | null) => void;
};

const mapDispatchToProps: MapDispatchToProps<DProps, Props> = dispatch => ({
  setRef: (ref: NavigationContainerComponent | null) => {
    if (ref) {
      dispatch(setNavigation(ref));
    }
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AppContainer);
