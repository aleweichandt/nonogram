// @flow
import React, { useEffect } from 'react';
import {
  Container, Content, Footer,
} from 'native-base';
import { GameBoard, GameSelector } from '../../game';

export type PropsType = {
  initGame: () => void,
}

const GameScreen = ({ initGame }: PropsType) => {
  useEffect(initGame, [initGame]);
  return (
    <Container>
      <Content>
        <GameBoard />
      </Content>
      <Footer>
        <GameSelector />
      </Footer>
    </Container>
  );
};

export default GameScreen;
