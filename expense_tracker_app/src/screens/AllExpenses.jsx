import React, { useContext } from 'react';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenseContext';

const AllExpenses = () => {
    const expensesCtx = useContext(ExpensesContext);

    return (
        <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" prompt={"Nothing to show"} />
    );
};

export default AllExpenses;