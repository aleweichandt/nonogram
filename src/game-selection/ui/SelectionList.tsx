import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {connectStyle} from '../../theme';

type DataId = string | {id: string};
type Props = {
  data: DataId[];
  ItemView: React.ComponentType<{id: string}>;
  onItemSelected: (id: string) => void;
  style: {list: {}};
};

const styles = {
  list: {},
};

const keyExtractor = (elem: DataId): string =>
  typeof elem === 'string' ? elem : elem.id;

class SelectionList extends React.PureComponent<Props> {
  static defaultProps = {
    data: [],
    onItemSelected: () => {},
  };

  renderItem = ({item}: {item: DataId}) => {
    const {ItemView, onItemSelected} = this.props;
    const id = keyExtractor(item);
    return (
      <TouchableOpacity key={id} onPress={() => onItemSelected(id)}>
        <ItemView id={id} />
      </TouchableOpacity>
    );
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {style, data, ItemView, onItemSelected, ...props} = this.props;
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

export default connectStyle('GameSelection.SelectionList', styles)(
  SelectionList,
);
