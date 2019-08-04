// @flow
import React from 'react';
import {
  View,
  Text,
} from 'native-base';
import { connectStyle } from '../../theme';
import { OPTION_BLACK, OPTION_BLOCKED } from '../const';
import type { OptionType } from '../types';

export type PropsType = {
  children: OptionType,
}

const styles = {
  'NativeBase.ViewNB': {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    '.black': {
      backgroundColor: 'darkgrey',
    },
    'NativeBase.Text': {
      textAlign: 'center',
    },
  },
};

const BaseOption = ({ children }: PropsType) => (
  <View black={OPTION_BLACK === children}>
    {OPTION_BLOCKED === children ? (
      <Text>X</Text>
    ) : null}
  </View>
);

export default connectStyle('Game.Option', styles)(BaseOption);
