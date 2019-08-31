// @flow
import React from 'react';
import {
  Card, CardItem, Left, Thumbnail, Body, Text, connectStyle,
} from 'native-base';
import type { Pack } from '../module';

type PropsType = $Shape<Pack> & {};

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

const PackItem = ({
  title,
  description,
  thumbnailUrl,
  backgroundUrl,
}: PropsType) => (title ? (
  <Card>
    <CardItem>
      <Left>
        <Thumbnail source={{ uri: thumbnailUrl }} />
        <Body>
          <Text>{title}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Thumbnail source={{ uri: backgroundUrl }} />
        <Text>
          {description}
        </Text>
      </Body>
    </CardItem>
  </Card>
) : null);

export default connectStyle('GameSelection.PackItem', styles)(PackItem);
