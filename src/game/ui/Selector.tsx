import React from 'react';
import {View} from 'native-base';
import {connectStyle} from '../../theme';
import UITile from './Tile';
import {OptionsType, OptionType} from '../module';

type Props = {
  options: OptionsType;
  Tile: React.ComponentProps<typeof UITile>;
};

const styles = {
  'NativeBase.ViewNB': {
    flexDirection: 'row',
  },
};

const Selector: React.FC<Props> = ({options, Tile}) => (
  <View padder>
    {options.map((item: OptionType, index: number) => (
      <Tile key={index} value={item} />
    ))}
  </View>
);
Selector.defaultProps = {
  Tile: UITile,
};

export default connectStyle('Game.Selector', styles)(Selector);
