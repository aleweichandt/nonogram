// @flow
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { OPTION_BLACK, OPTION_BLOCKED, OPTION_VOID } from '../const';
import type { OptionType } from '../types';

export type PropsType = {
  children: OptionType,
}

const colorMappings = {
  [OPTION_BLACK]: 'black',
  [OPTION_BLOCKED]: 'white',
  [OPTION_VOID]: 'white',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    textAlign: 'center',
  },
});

const BaseOption = ({ children }: PropsType) => {
  const backgroundColor = colorMappings[children] || 'white';
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {OPTION_BLOCKED === children ? (
        <Text style={styles.block}>X</Text>
      ) : null}
    </View>
  );
};

export default BaseOption;
