import React from 'react';
import styled from 'styled-components/native';
import {OPTION_BLACK, OPTION_BLOCKED, ColoredOption} from '../module';

const View = styled.View<{black: boolean}>`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.black ? '#a9a9a9' : '#fff')};
`;
const Text = styled.Text`
  text-align: center;
`;

type Props = {
  children: ColoredOption;
};

const Value: React.FC<Props> = ({children}) => (
  <View black={OPTION_BLACK === children}>
    {OPTION_BLOCKED === children ? <Text>X</Text> : null}
  </View>
);

export default Value;
