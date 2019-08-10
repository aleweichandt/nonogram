// @flow
import { connect } from 'react-redux';
import { LineInfo } from '../ui';
import { createColInfo, createRowInfo } from '../module';

const getRowInfo = createRowInfo();
const getColInfo = createColInfo();

const mapStateToProps = (state: *, props) => ({
  info: props.row !== undefined ? getRowInfo(state, props) : getColInfo(state, props),
});

export default connect(mapStateToProps, undefined)(LineInfo);
