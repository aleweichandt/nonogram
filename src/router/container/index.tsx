import {connect} from 'react-redux';
import AppContainer from '../ui';
import {setNavigation} from '../../navigation/module';

const mapDispatchToProps = (dispatch: any) => ({
  // TODO fix types
  setRef: (navigation: any) => {
    if (navigation) {
      dispatch(setNavigation(navigation));
    }
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AppContainer);
