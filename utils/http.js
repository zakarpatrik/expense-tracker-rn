import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-df624-default-rtdb.europe-west1.firebasedatabase.app';

export const storeExpense = async (expenseData) => {
  const res = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  return res.data.name;
};

export const fetchExpenses = async () => {
  const res = await axios.get(BACKEND_URL + '/expenses.json');

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

export const updateExpense = (id, expenseData) => {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};