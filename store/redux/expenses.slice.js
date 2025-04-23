import { createSlice } from '@reduxjs/toolkit';
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
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const { addExpense, updateExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;