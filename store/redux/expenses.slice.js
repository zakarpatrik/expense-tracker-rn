import { createSelector, createSlice } from '@reduxjs/toolkit';
import { DUMMY_EXPENSES } from '../../data/dummy-data';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: DUMMY_EXPENSES,
  reducers: {
    addExpense: (state, action) => {
      state.push({
        id: state[state.length - 1].id + 1,
        description: action.payload.description,
        amount: action.payload.amount,
        date: action.payload.date,
      });
    },
    updateExpense: (state, action) => {
      return state.map(expense => expense.id === action.payload.id ? action.payload : expense);
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