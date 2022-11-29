import React, { useContext, useEffect, useState } from 'react';
import ErrorOverlay from '../Components/common/ErrorOverlay';
import LoadingOverlay from '../Components/common/LoadingOverlay';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenseContext';
import { getDateMinusDays } from '../util/FormatDate';
import { fetchExpenses } from '../util/http';


const RecentExpenses = () => {
    const expensesCtx = useContext(ExpensesContext);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();


    useEffect(() => {
        const getExpenses = async () => {
            setIsFetching(true);
            try {
                const expenses = await fetchExpenses();
                expensesCtx.setExpenses(expenses);
            } catch (error) {
                setError("Could not fetch expenses");
            }
            setIsFetching(false);
        };
        getExpenses();
    }, []);


    if (isFetching) {
        return <LoadingOverlay />;
    }

    if (error && !isFetching) {
        return <ErrorOverlay message={error} />;
    }

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
