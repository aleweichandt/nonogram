import React from 'react';
import {View} from 'native-base';
import {connectStyle} from '../../theme';

type Props = {};

const styles = {
  'NativeBase.ViewNB': {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
};

const Value: React.FC<Props> = () => <View />;

export default connectStyle('Game.Value', styles)(Value);
