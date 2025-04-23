import { createSelector, createSlice } from '@reduxjs/toolkit';
import { DUMMY_EXPENSES } from '../../data/dummy-data';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: DUMMY_EXPENSES,
  reducers: {
    addExpense: (state, action) => {
      const formatDate = (date) => {
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0'); // months are 0-based
        const day = `${date.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      state.push({
        id: state.length + 1,
        description: action.payload.description,
        amount: action.payload.amount,
        date: formatDate(new Date()),
      });
    },
    updateExpense: (state, action) => {
      state.map(expense => expense.id === action.payload.id ? action.payload : expense);
    },
    removeExpense: (state, action) => {
      state.splice(state.findIndex((expense) => expense.id === action.payload.id), 1);
    },
  },
});

export const selectAllExpenses = (state) => state.expenses;
export const selectAllExpensesSum = (state) => state.expenses.reduce((acc, current) => acc + current.amount, 0);

export const selectRecentExpenses =
  (state) => state.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    const expenseDate = new Date(expense.date);
    return expenseDate >= sevenDaysAgo && expenseDate <= today;
  });
export const selectRecentExpensesSum = createSelector(
  [selectRecentExpenses],
  (recentExpenses) => recentExpenses.reduce((acc, current) => acc + current.amount, 0),
);

export const { addExpense, updateExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;