// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  connectStyle, Content,
} from 'native-base';

type WithIdType = string & { id: string };
type PropsType = {
  items?: WithIdType[],
  ItemView: React$ComponentType<{ id: string }>,
  onItemSelected?: (id: string) => void,
}

const styles = {};

const SelectionList = ({ items = [], ItemView, onItemSelected = () => {} }: PropsType) => (
  <Content>
    {items.map((elem: WithIdType) => {
      const id = typeof elem === 'string' ? elem : elem.id;
      return (
        <TouchableOpacity
          key={id}
          onPress={onItemSelected.bind(id)} // eslint-disable-line
        >
          <ItemView id={id} />
        </TouchableOpacity>
      );
    })}
  </Content>
);
SelectionList.defaultProps = {
  items: [],
  onItemSelected: () => {},
};

export default connectStyle('GameSelection.SelectionList', styles)(SelectionList);
