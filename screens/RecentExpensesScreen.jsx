import { StyleSheet, View } from 'react-native';
import Header from '../components/ui/Header';
import ExpenseList from '../components/ui/ExpenseList';
import { useSelector } from 'react-redux';
import { selectRecentExpenses, selectRecentExpensesSum } from '../store/redux/expenses.slice';

const RecentExpensesScreen = () => {
  const recentExpenses = useSelector(selectRecentExpenses);
  const recentExpenseSum = useSelector(selectRecentExpensesSum);

  return (
    <View style={styles.rootContainer}>
      <Header title="Last 7 days" amount={recentExpenseSum} />
      <ExpenseList data={recentExpenses} />
    </View>
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-start',
  },
});