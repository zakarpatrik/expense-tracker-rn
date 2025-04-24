import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-df624-default-rtdb.europe-west1.firebasedatabase.app';

export const storeExpense = (expenseData) => {
  axios.post(
    BACKEND_URL + 'expenses.json',
    expenseData,
  );
};

export const fetchExpenses = async () => {
  const res = await axios.get(BACKEND_URL + '/expenses.json');

  console.log(res);

  const expenses = [];

  for (const key in res.data) {
    const expenseObj = {
      id: key,
      amount: res.data[key].amount,
      date: res.data[key].date,
      description: res.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};