import { StyleSheet, View } from 'react-native';
import Header from '../components/ui/Header';
import ExpenseList from '../components/ui/ExpenseList';
import { useEffect, useState } from 'react';
import { fetchExpenses } from '../utils/http';
import { selectRecentExpenses, selectRecentExpensesSum, setExpenses } from '../store/redux/expenses.slice';
import { useDispatch, useSelector } from 'react-redux';
import LoadingOverlay from '../components/ui/LoadingOverlay';

const RecentExpensesScreen = () => {
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();

  const recentExpenses = useSelector(selectRecentExpenses);
  const recentExpenseSum = useSelector(selectRecentExpensesSum);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      setIsFetching(false);
      dispatch(setExpenses(expenses));
    };

    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.rootContainer}>
      <Header title="Last 7 days" amount={recentExpenseSum} />
      <ExpenseList data={recentExpenses} fallbackText="No recent expenses" />
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