import React from 'react';
import { View } from 'react-native';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';


const RecentExpenses = () => {
    return (<ExpensesOutput expensesPeriod={"Last 7 days"} />);
};

export default RecentExpenses;
