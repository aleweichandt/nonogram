import {connect} from 'react-redux';
import {NavigationContainerComponent} from 'react-navigation';
import AppContainer from '../ui';
import {setNavigation} from '../../navigation/module';

const mapDispatchToProps = (dispatch: any) => ({
  setRef: (navigation: NavigationContainerComponent | null) => {
    if (navigation) {
      dispatch(setNavigation(navigation));
    }
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AppContainer);
