// @flow
import { connect } from 'react-redux';
import AppContainer from '../ui';
import { setNavigation } from '../../navigation/module';

const mapDispatchToProps = dispatch => ({
  setRef: (navigation) => {
    if (navigation) {
      dispatch(setNavigation(navigation));
    }
  },
});

export default connect(null, mapDispatchToProps)(AppContainer);
