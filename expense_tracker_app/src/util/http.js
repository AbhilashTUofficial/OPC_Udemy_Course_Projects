import axios from 'axios';

const api_url =
  'https://expensestracker-f3f5f-default-rtdb.asia-southeast1.firebasedatabase.app';

export const storeExpense = async expenseData => {
  const response = await axios.post(api_url + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(api_url + '/expenses.json');
  const expenses = [];
  for (const key in response.data) {
    const expObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expObj);
  }

  return expenses;
};

export const updateExpenses = (id, expenseData) => {
  return axios.put(api_url + `/expenses/${id}.json`, expenseData);
};

export const deleteExpenses = id => {
  return axios.delete(api_url + `/expenses/${id}.json`);
};
