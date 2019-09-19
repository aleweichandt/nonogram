import React from 'react';
import {Card, CardItem, Left, Body, Thumbnail, Text} from 'native-base';
import {connectStyle} from '../../theme';
import {Game} from '../module';

type Props = Game & {};

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

const GameItem: React.FC<Props> = ({title, thumbnailUrl}) =>
  title ? (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail large source={{uri: thumbnailUrl}} />
          <Body>
            <Text>{title}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  ) : null;

export default connectStyle('GameSelection.GameItem', styles)(GameItem);
