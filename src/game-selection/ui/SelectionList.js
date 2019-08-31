// @flow
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import {
  connectStyle,
} from 'native-base';

type WithIdType = string & { id: string };
type PropsType = {
  items?: WithIdType[],
  ItemView: React$ComponentType<{ id: string }>,
  onItemSelected?: (id: string) => void,
  style: { list: {}},
}

const styles = {
  list: {

  },
};

const keyExtractor = (elem: WithIdType): string => (typeof elem === 'string' ? elem : elem.id);

class SelectionList extends React.PureComponent<PropsType> {
  static defaultProps = {
    items: [],
    onItemSelected: () => {},
  };

  renderItem = ({ item }: { item: WithIdType }) => {
    // eslint-disable-next-line no-unused-vars
    const { ItemView, onItemSelected = (id: string) => {} } = this.props;
    const id = keyExtractor(item);
    return (
      <TouchableOpacity
        key={id}
        onPress={() => onItemSelected(id)}
      >
        <ItemView id={id} />
      </TouchableOpacity>
    );
  }

  render() {
    const {
      style, items = [],
    } = this.props;
    return (
      <FlatList
        style={style.list}
        data={items}
        keyExtractor={keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

export default connectStyle('GameSelection.SelectionList', styles)(SelectionList);
