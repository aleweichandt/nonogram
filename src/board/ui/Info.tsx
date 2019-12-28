import styled from 'styled-components/native';
import {GridProps} from '../types';

const Info = styled.View<GridProps>`
  width: 50;
  height: 50;
  padding: 0;
  margin: 0;
  align-items: center;
  flex-direction: row;
`;
Info.defaultProps = {
  row: undefined,
  column: undefined,
};

export default Info;
