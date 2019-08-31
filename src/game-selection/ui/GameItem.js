// @flow
import React from 'react';
import {
  Card, CardItem, Left, Body, Text, Image, connectStyle,
} from 'native-base';
import type { Game } from '../module';

export type PropsType = $Shape<Game> & {};

const styles = {
  'NativeBase.Card': {
    flex: 0,
    'NativeBase.CardItem': {
      'NativeBase.Body': {
        'NativeBase.Image': {
          flex: 1,
          height: 200,
          width: 200,
        },
      },
    },
  },
};

const GameItem = ({
  title,
  thumbnailUrl,
}: PropsType) => (title ? (
  <Card>
    <CardItem>
      <Left>
        <Image source={{ uri: thumbnailUrl }} />
        <Body>
          <Text>{title}</Text>
        </Body>
      </Left>
    </CardItem>
  </Card>
) : null);

export default connectStyle('GameSelection.GameItem', styles)(GameItem);
