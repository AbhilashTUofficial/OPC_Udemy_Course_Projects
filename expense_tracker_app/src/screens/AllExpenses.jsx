import React from 'react';
import { View } from 'react-native';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';


const AllExpenses = () => {
    return (<ExpensesOutput expensesPeriod={"total"} />);
};

export default AllExpenses;