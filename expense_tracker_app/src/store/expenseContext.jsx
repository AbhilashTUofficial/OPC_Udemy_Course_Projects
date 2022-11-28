import { createContext, useReducer } from 'react';

const InitialData = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05'),
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2022-11-28'),
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-11-29'),
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-11-30'),
    },

];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
};

const ExpensesCnxtProvider = ({ children }) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, InitialData);

    const addExpense = (expenseData) => {
        dispatch({ type: 'ADD', payload: expenseData });
    };

    const deleteExpense = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    const updateExpense = (id, expenseData) => {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    };

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesCnxtProvider;