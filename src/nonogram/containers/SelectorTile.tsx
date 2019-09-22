import React from 'react';
import {SelectorTile} from '../../board';
import {Value} from '../ui';

const ColoredSelectorTile: React.FC<{}> = props => (
  // @ts-ignore
  <SelectorTile {...props} Option={Value} />
);

export default ColoredSelectorTile;
