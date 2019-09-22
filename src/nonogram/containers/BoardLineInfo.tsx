import {connect} from 'react-redux';
import {StateWithBoard, GridProps} from '../../board';
import {createColInfo, createRowInfo, ColoredOption} from '../module';
import {Info} from '../ui';

const getRowInfo = createRowInfo();
const getColInfo = createColInfo();

const mapStateToProps = (
  state: StateWithBoard<ColoredOption>,
  props: GridProps,
) => ({
  info:
    props.row !== undefined
      ? getRowInfo(state, props)
      : getColInfo(state, props),
});

export default connect(
  mapStateToProps,
  undefined,
)(Info);
