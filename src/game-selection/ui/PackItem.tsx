import React from 'react';
import {ImageBackground} from 'react-native';
import {Card, CardItem, Body, Text, View} from 'native-base';
import {connectStyle} from '../../theme';
import {Pack} from '../module';

type PropsType = Pack & {
  style: {background: {}; title: {}; image: {}};
};

const styles = {
  'NativeBase.Card': {
    flex: 0,
    'NativeBase.CardItem': {
      'NativeBase.Body': {
        'NativeBase.Text': {
          paddingTop: 10,
          paddingLeft: 5,
        },
      },
    },
  },
  background: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    borderRadius: 25,
    resizeMode: 'cover',
  },
  title: {
    margin: 5,
    padding: 5,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
};

const PackItem = ({style, title, description, thumbnailUrl}: PropsType) =>
  title ? (
    <Card>
      <CardItem>
        <Body>
          <ImageBackground
            source={{uri: thumbnailUrl}}
            style={style.background}
            imageStyle={style.image}>
            <View style={style.title}>
              <Text>{title}</Text>
            </View>
          </ImageBackground>
          <Text>{description}</Text>
        </Body>
      </CardItem>
    </Card>
  ) : null;

export default connectStyle('GameSelection.PackItem', styles)(PackItem);
