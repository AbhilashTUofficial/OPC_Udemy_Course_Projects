import React, { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomBtn from '../Components/common/CustomBtn';
import IconBtn from '../Components/common/IconBtn';
import ExpenseForm from '../Components/ManageExpense/ExpenseForm';
import { GlobalStyles } from '../constants';
import { ExpensesContext } from '../store/expenseContext';


const ManageExpense = ({ route, navigation }) => {

    //! ?: null safety operator.
    const expenseId = route.params?.expenseId;
    //! !!: convert a falsey value to false and truesy value to true.
    const isEditing = !!expenseId;

    const expensesCtx = useContext(ExpensesContext);

    const selectedExpense = expensesCtx.expenses.find(
        (expense) => expense.id === expenseId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEditing]);

    const deleteExpenseHandler = () => {
        expensesCtx.deleteExpense(expenseId);
        navigation.goBack();
    };

    const cancelHandler = () => {
        navigation.goBack();

    };

    function confirmHandler(expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(expenseId, expenseData);
        } else {
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();
    }

    return (

        <View style={manageExpenseStyles.cont}>
            <ExpenseForm
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                submitBtnLabel={isEditing ? "Update" : "Add"}
                defalutValues={selectedExpense} />

            {isEditing && (
                <View style={manageExpenseStyles.delCont}>
                    <IconBtn icon={require("../assets/icons/delete_icon.png")} size={24}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
};

export default ManageExpense;

const manageExpenseStyles = StyleSheet.create({
    cont: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },

    delCont: {
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
    },
});
