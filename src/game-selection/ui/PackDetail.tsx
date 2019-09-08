import React from 'react';
import {
  Text, Content, View,
} from 'native-base';
import { connectStyle } from '../../theme';
import {
  ImageBackground,
} from 'react-native';
import GameView, {  PropsType as GamePropsType } from './GameItem';
import SelectionList from './SelectionList';
import { Pack, GameId } from '../module';

type PropsType = Pack & {
  style: { background: {}, image: {}, title: {}},
  Game: React.PureComponent<GamePropsType>,
  onGameSelected: (id: GameId) => void
};

const styles = {
  'NativeBase.Content': {
    'GameSelection.SelectionList': {
      list: {
        flex: 1,
      },
    },
  },
  background: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  image: {
    opacity: 0.5,
    backgroundColor: 'white',
  },
  title: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
};

class PackDetail extends React.PureComponent<PropsType> {
  static defaultProps = {
    Game: GameView,
  };

  renderHeader = () => {
    const {
      style, backgroundUrl, title,
    } = this.props;
    return (
      <ImageBackground
        source={{ uri: backgroundUrl }}
        style={style.background}
        imageStyle={style.image}
      >
        <View style={style.title}>
          <Text>
            {title}
          </Text>
        </View>
      </ImageBackground>
    );
  }

  render() {
    const {
      Game, title, games, onGameSelected,
    } = this.props;
    return (title ? (
      <Content>
        <SelectionList
          data={games}
          ItemView={Game}
          onItemSelected={onGameSelected}
          ListHeaderComponent={this.renderHeader}
        />
      </Content>
    ) : null);
  }
}

export default connectStyle('GameSelection.PackDetail', styles)(PackDetail);
