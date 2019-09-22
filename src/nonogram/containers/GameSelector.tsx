import React from 'react';
import {GameSelector} from '../../board';
import SelectorTile from './SelectorTile';

const ColorSelector: React.FC<{}> = props => (
  // @ts-ignore
  <GameSelector {...props} Tile={SelectorTile} />
);

export default ColorSelector;
