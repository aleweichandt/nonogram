import React from 'react';
import {View, Text} from 'native-base';
import {connectStyle} from '../../theme';
import {OPTION_BLACK, OPTION_BLOCKED, ColoredOption} from '../module';

type Props = {
  children: ColoredOption;
};

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

const Value: React.FC<Props> = ({children}) => (
  // @ts-ignore nativebase definition
  <View black={OPTION_BLACK === children}>
    {OPTION_BLOCKED === children ? <Text>X</Text> : null}
  </View>
);

export default connectStyle('Game.Value', styles)(Value);
