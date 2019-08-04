// @flow
import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { GameBoard, GameSelector } from '../../game';

export type PropsType = {
  initGame: () => void,
}

const styles = StyleSheet.create({
  container: {
  },
});

const GameScreen = ({ initGame }: PropsType) => {
  useEffect(initGame, [initGame]);
  return (
    <View style={styles.container}>
      <GameBoard />
      <GameSelector />
    </View>
  );
};

export default GameScreen;
