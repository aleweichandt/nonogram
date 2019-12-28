import React from 'react';
import styled from 'styled-components/native';
import {GridProps} from '../../board';
import {LineInfo} from '../module';

const View = styled.View<{vertical: boolean}>`
  width: 50;
  height: 50;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
  align-items: center;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
`;
const Text = styled.Text<{complete: boolean}>`
  font-size: 12;
  padding: 3px;
  color: ${props => (props.complete ? '#d3d3d3' : '#000')};
`;

type Props = GridProps & {
  info?: LineInfo;
};

const Info: React.FC<Props> = ({info = [], row}) => (
  <View vertical={row === undefined}>
    {info.map(({count, complete}) => (
      <Text complete={complete}>{count}</Text>
    ))}
  </View>
);

export default Info;
