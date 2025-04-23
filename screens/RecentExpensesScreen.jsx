import { StyleSheet, View } from 'react-native';
import Header from '../components/ui/Header';
import { DUMMY_EXPENSES } from '../data/dummy-data';
import ExpenseList from '../components/ui/ExpenseList';

const RecentExpensesScreen = () => {
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  const recentExpenses = DUMMY_EXPENSES.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate >= sevenDaysAgo && expenseDate <= today;
  });

  const recentExpenseSum = recentExpenses.reduce((acc, current) => acc + current.amount, 0);

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