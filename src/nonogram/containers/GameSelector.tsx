import React from 'react';
import {GameSelector} from '../../board';
import SelectorTile from './SelectorTile';

type Props = React.ComponentProps<typeof GameSelector>;

const ColorSelector: React.FC<Props> = props => (
  // @ts-ignore
  <GameSelector {...props} Tile={SelectorTile} />
);

export default ColorSelector;
