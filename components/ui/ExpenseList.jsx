import ListItem from './ListItem';
import { FlatList } from 'react-native';

const ExpenseList = ({ data }) => {
  return (
    <FlatList data={data}
              renderItem={({ item }) => <ListItem amount={item.amount} date={item.date}
                                                  description={item.description} />}
              keyExtractor={(item) => item.id} />
  );
};

export default ExpenseList;