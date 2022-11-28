import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const ExpensesOutput = ({ expenses, expensesPeriod, prompt }) => {

    let content = <Text style={expensesOutputStyles.promptText}>{prompt}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />;
    }


    return (
        <View style={expensesOutputStyles.cont}>
            <ExpensesSummary expenses={expenses} period={expensesPeriod} />
            {content}
        </View>
    );
};


export default ExpensesOutput;


const expensesOutputStyles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    promptText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    },
});
