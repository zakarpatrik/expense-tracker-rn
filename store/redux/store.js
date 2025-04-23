import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './expenses.slice';

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});

export default store;