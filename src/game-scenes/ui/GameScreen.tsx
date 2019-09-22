import React from 'react';
import {Container, Content, Footer} from 'native-base';
import {GameBoard, GameSelector} from '../../nonogram';

type Props = {};

const GameScreen: React.FC<Props> = () => (
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
