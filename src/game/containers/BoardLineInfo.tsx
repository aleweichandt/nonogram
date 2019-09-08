import {connect} from 'react-redux';
import {LineInfo} from '../ui';
import {createColInfo, createRowInfo, StateWithGameType} from '../module';

const getRowInfo = createRowInfo();
const getColInfo = createColInfo();

type PropsType = {
  row: number | undefined;
  column: number | undefined;
};

const mapStateToProps = (state: StateWithGameType, props: PropsType) => ({
  info:
    props.row !== undefined
      ? getRowInfo(state, props)
      : getColInfo(state, props),
});

export default connect(
  mapStateToProps,
  undefined,
)(LineInfo);
