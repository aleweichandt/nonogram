import React from 'react';
import {View} from 'native-base';
import {connectStyle} from '../../theme';
import {GridProps} from '../types';

const styles = {
  'NativeBase.ViewNB': {
    width: 50,
    height: 50,
    padding: 0,
    margin: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
};

type Props = GridProps;

const Info: React.FC<Props> = () => <View />;
Info.defaultProps = {
  row: undefined,
  column: undefined,
};

export default connectStyle('Game.Info', styles)(Info);
