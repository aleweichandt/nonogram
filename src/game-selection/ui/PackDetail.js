// @flow
import React from 'react';
import {
  connectStyle, Text, View,
} from 'native-base';
import {
  ImageBackground,
} from 'react-native';
import GameView, { type PropsType as GamePropsType } from './GameItem';
import SelectionList from './SelectionList';
import type { Pack, GameId } from '../module';

type PropsType = $Shape<Pack> & {
  Game: React$ComponentType<GamePropsType>,
  onGameSelected: (id: GameId) => void
};

const styles = {
  'NativeBase.ViewNB': {
    ImageBackground: {
      width: 300,
      height: 200,
      flex: 1,
      'NativeBase.Text': {
        textAlign: 'center',
      },
    },
    'GameSelection.SelectionList': {
      'GameSelection.GameItem': {},
    },
  },
};

const PackDetail = ({
  Game, backgroundUrl, title, games, onGameSelected,
}: PropsType) => (title ? (
  <View>
    <ImageBackground source={{ uri: backgroundUrl }}>
      <Text>
        {title}
      </Text>
    </ImageBackground>
    <SelectionList items={games} ItemView={Game} onItemSelected={onGameSelected} />
  </View>
) : null);
PackDetail.defaultProps = {
  Game: GameView,
};

export default connectStyle('GameSelection.PackDetail', styles)(PackDetail);
