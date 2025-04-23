import { StyleSheet, View } from 'react-native';
import Header from '../components/ui/Header';
import ExpenseList from '../components/ui/ExpenseList';
import { useSelector } from 'react-redux';
import { selectAllExpenses, selectAllExpensesSum } from '../store/redux/expenses.slice';

const AllExpensesScreen = () => {
  const allExpenses = useSelector(selectAllExpenses);
  const expenseSum = useSelector(selectAllExpensesSum);

  return (
    <View style={styles.rootContainer}>
      <Header title="Total" amount={expenseSum} />
      <ExpenseList data={allExpenses} />
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