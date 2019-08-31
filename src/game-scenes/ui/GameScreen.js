// @flow
import React from 'react';
import {
  Container, Content, Footer,
} from 'native-base';
import { GameBoard, GameSelector } from '../../game';

export type PropsType = {
}

const GameScreen = () => (
  <Container>
    <Content>
      <GameBoard />
    </Content>
    <Footer>
      <GameSelector />
    </Footer>
  </Container>
);

export default GameScreen;
