import {connect} from 'react-redux';
import {LineInfo} from '../ui';
import {createColInfo, createRowInfo, StateWithGameType} from '../module';
import {GridProps} from '../types';

const getRowInfo = createRowInfo();
const getColInfo = createColInfo();

const mapStateToProps = (state: StateWithGameType, props: GridProps) => ({
  info:
    props.row !== undefined
      ? getRowInfo(state, props)
      : getColInfo(state, props),
});

export default connect(
  mapStateToProps,
  undefined,
)(LineInfo);
