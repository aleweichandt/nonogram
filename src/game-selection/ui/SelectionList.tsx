import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { connectStyle } from '../../theme';

type WithIdType = string & { id: string };
type PropsType = {
  data?: WithIdType[],
  ItemView: React.ComponentType<{ id: string }>,
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
    data: [],
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
      style, data = [], ItemView, onItemSelected, ...props
    } = this.props;
    return (
      <FlatList
        style={style.list}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={this.renderItem}
        {...props}
      />
    );
  }
}

export default connectStyle('GameSelection.SelectionList', styles)(SelectionList);
