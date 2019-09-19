import React from 'react';
import {Container, Content, Button, Text} from 'native-base';

type Props = {
  next: () => void;
};

const SplashScreen: React.FC<Props> = ({next}) => (
  <Container>
    <Content padder>
      <Button onPress={next}>
        <Text>START</Text>
      </Button>
    </Content>
  </Container>
);

export default SplashScreen;
