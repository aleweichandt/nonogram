// @flow
import React from 'react';
import {
  Card, CardItem, Left, Body, Thumbnail, Text, connectStyle,
} from 'native-base';
import type { Game } from '../module';

export type PropsType = $Shape<Game> & {};

const styles = {
  'NativeBase.Card': {
    flex: 0,
    'NativeBase.CardItem': {
      'NativeBase.Body': {
        'NativeBase.Thumbnail': {
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
        <Thumbnail large source={{ uri: thumbnailUrl }} />
        <Body>
          <Text>{title}</Text>
        </Body>
      </Left>
    </CardItem>
  </Card>
) : null);

export default connectStyle('GameSelection.GameItem', styles)(GameItem);
