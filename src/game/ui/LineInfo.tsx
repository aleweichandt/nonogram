import React from 'react';
import {View, Text} from 'native-base';
import {connectStyle} from '../../theme';
import {LineInfoType, InfoType} from '../module';
import {GridProps} from '../types';

const styles = {
  'NativeBase.ViewNB': {
    width: 50,
    height: 50,
    padding: 0,
    margin: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    '.vertical': {
      flexDirection: 'column',
    },
    'NativeBase.Text': {
      fontSize: 12,
      padding: 3,
      '.complete': {
        color: 'lightgrey',
      },
    },
  },
};

type Props = GridProps & {
  info: LineInfoType;
};

const LineInfo: React.FC<Props> = ({info, row}) => (
  // @ts-ignore nativebase definition
  <View vertical={row === undefined}>
    {info.map(({count, complete}: InfoType) => (
      // @ts-ignore nativebase definition
      <Text complete={complete}>{count}</Text>
    ))}
  </View>
);
LineInfo.defaultProps = {
  row: undefined,
  column: undefined,
  info: [],
};

export default connectStyle('Game.LineInfo', styles)(LineInfo);
