import { StyleSheet, View } from 'react-native';
import Header from '../components/ui/Header';
import ExpenseList from '../components/ui/ExpenseList';
import { DUMMY_EXPENSES } from '../data/dummy-data';

const AllExpensesScreen = () => {
  const expenseSum = DUMMY_EXPENSES.reduce((acc, current) => acc + current.amount, 0);
  
  return (
    <View style={styles.rootContainer}>
      <Header title="Total" amount={expenseSum} />
      <ExpenseList data={DUMMY_EXPENSES} />
    </View>
  );
};

export default AllExpensesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-start',
  },
});