import React from 'react';
import {Container, Content, Button, Text} from 'native-base';

export type PropsType = {
  next: () => void;
};

const SplashScreen = ({next}: PropsType) => (
  <Container>
    <Content padder>
      <Button onPress={next}>
        <Text>START</Text>
      </Button>
    </Content>
  </Container>
);

export default SplashScreen;
