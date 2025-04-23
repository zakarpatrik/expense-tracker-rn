import ListItem from './ListItem';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const ExpenseList = ({ data, fallbackText }) => {
  if (data.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>{fallbackText}</Text>
      </View>
    );
  }
  return (
    <FlatList data={data}
              renderItem={({ item }) => <ListItem id={item.id} amount={item.amount} date={item.date}
                                                  description={item.description} />}
              keyExtractor={(item) => item.id} />
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    color: GlobalStyles.colors.primary50,
    fontSize: 14,
    fontWeight: 'bold',
  },
});