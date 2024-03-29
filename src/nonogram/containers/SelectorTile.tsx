import React from 'react';
import {SelectorTile} from '../../board';
import {Value} from '../ui';

type Props = React.ComponentProps<typeof SelectorTile>;

const ColoredSelectorTile: React.FC<Props> = props => (
  <SelectorTile {...props} Option={Value} />
);

export default ColoredSelectorTile;
