import React from 'react';
import {Container} from 'native-base';
import {GameSelection} from '../../game-selection';

type Props = {};

const GameSelectionScreen: React.FC<Props> = () => (
  <Container>
    <GameSelection />
  </Container>
);

export default GameSelectionScreen;
