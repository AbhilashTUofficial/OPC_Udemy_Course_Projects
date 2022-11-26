import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const ExpensesOutput = ({ expenses, expensesPeriod }) => {



    const dummyExpenses = [
        {
            id: "e1",
            description: "item one",
            amount: 56.99,
            date: new Date('2021-12-19')
        },
        {
            id: "e2",
            description: "item two",
            amount: 26.99,
            date: new Date('2021-6-19')
        },
        {
            id: "e3",
            description: "item three",
            amount: 16.99,
            date: new Date('2021-4-19')
        },
        {
            id: "e4",
            description: "item four",
            amount: 96.99,
            date: new Date('2022-11-29')
        },
        {
            id: "e5",
            description: "item four",
            amount: 96.99,
            date: new Date('2021-11-28')
        },
    ];

    return (
        <View style={expensesOutputStyles.cont}>
            <ExpensesSummary expenses={dummyExpenses} period={expensesPeriod} />
            <ExpensesList expenses={dummyExpenses} />
        </View>
    );
};


export default ExpensesOutput;


const expensesOutputStyles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        padding: 24,
    }
});