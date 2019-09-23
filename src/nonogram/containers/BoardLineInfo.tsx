import {connect, MapStateToProps} from 'react-redux';
import {StateWithBoard} from '../../board';
import {createColInfo, createRowInfo, ColoredOption, LineInfo} from '../module';
import {Info} from '../ui';

type Props = React.ComponentProps<typeof Info>;
type SProps = {
  info: LineInfo;
};

const getRowInfo = createRowInfo();
const getColInfo = createColInfo();

const mapStateToProps: MapStateToProps<
  SProps,
  Props,
  StateWithBoard<ColoredOption>
> = (state, props) => ({
  info:
    props.row !== undefined
      ? getRowInfo(state, props)
      : getColInfo(state, props),
});

export default connect(
  mapStateToProps,
  undefined,
)(Info);
