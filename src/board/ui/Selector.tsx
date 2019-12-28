import React from 'react';
import styled from 'styled-components/native';
import UITile from './Tile';
import {Options} from '../module';

const View = styled.View`
  padding: 10px;
  flex-direction: row;
`;

type Props = {
  options?: Options<any>;
  Tile?: typeof UITile;
};

const Selector: React.FC<Props> = ({options = [], Tile = UITile}) => (
  <View>
    {options.map((item: any, index: number) => (
      <Tile key={index} value={item} />
    ))}
  </View>
);

export default Selector;
