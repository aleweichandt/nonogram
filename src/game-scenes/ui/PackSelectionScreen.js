// @flow
import React from 'react';
import {
  Container,
} from 'native-base';
import { PackSelection } from '../../game-selection';

export type PropsType = {
}

const PackSelectionScreen = () => (
  <Container>
    <PackSelection />
  </Container>
);

export default PackSelectionScreen;
