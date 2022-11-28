import React, { useContext } from 'react';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenseContext';
import { getDateMinusDays } from '../util/FormatDate';


const RecentExpenses = () => {
    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    });

    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" prompt={"No Expenses for the past 7 days."} />
    );
};

export default RecentExpenses;
