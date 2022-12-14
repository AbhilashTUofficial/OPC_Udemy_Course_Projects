import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants';

// reduce : loop through the elements, and add each value to 
// the sum, initial value 0,
// toFixed: return the value with x decimal places
function ExpensesSummary({ expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    return (
        <View style={summaryStyles.cont}>
            <Text style={summaryStyles.period}>{periodName}</Text>
            <Text style={summaryStyles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}
export default ExpensesSummary;


const summaryStyles = StyleSheet.create({
    cont: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    periodText: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,
    },
    sumText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },
});