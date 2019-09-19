import React from 'react';
import {Container} from 'native-base';
import {PackSelection} from '../../game-selection';

type Props = {};

const PackSelectionScreen: React.FC<Props> = () => (
  <Container>
    <PackSelection />
  </Container>
);

export default PackSelectionScreen;
