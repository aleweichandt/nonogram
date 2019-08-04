// @flow
import React from 'react';
import {
  Container, Content, Button, Text,
} from 'native-base';

export type PropsType = {
  next: () => void,
}

const Splash = ({ next }: PropsType) => (
  <Container>
    <Content padder>
      <Button onPress={next}>
        <Text>NEXT</Text>
      </Button>
    </Content>
  </Container>
);

export default Splash;
