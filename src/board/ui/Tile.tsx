import React from 'react';
import styled from 'styled-components/native';
import Value from './Value';
import {SelectorProps} from '../types';

const Button = styled.TouchableOpacity<{selected: boolean}>`
  width: 50;
  height: 50;
  padding: 0;
  margin: 0;
  border-width: ${props => (props.selected ? 4 : 2)};
  border-radius: 5;
  border-color: ${props => (props.selected ? '#000' : '#d3d3d3')};
  background-color: #fff;
`;

type Props<T> = SelectorProps<T> & {
  selected?: boolean;
  onPress?: () => void;
  Option?: React.ComponentType<any>;
};

const Tile: React.FC<Props<any>> = ({
  value,
  selected = false,
  onPress = () => {},
  Option = Value,
}) => (
  <Button selected={selected} onPress={onPress}>
    <Option>{value}</Option>
  </Button>
);

export default Tile;
