import React, { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomBtn from '../Components/common/CustomBtn';
import ErrorOverlay from '../Components/common/ErrorOverlay';
import IconBtn from '../Components/common/IconBtn';
import LoadingOverlay from '../Components/common/LoadingOverlay';
import ExpenseForm from '../Components/ManageExpense/ExpenseForm';
import { GlobalStyles } from '../constants';
import { ExpensesContext } from '../store/expenseContext';
import { deleteExpenses, storeExpense, updateExpenses } from '../util/http';


const ManageExpense = ({ route, navigation }) => {

    //! ?: null safety operator.
    const expenseId = route.params?.expenseId;
    //! !!: convert a falsey value to false and truesy value to true.
    const isEditing = !!expenseId;

    const expensesCtx = useContext(ExpensesContext);

    const [isSubmiting, setIsSubmiting] = useState(false);

    const [error, setError] = useState();

    const selectedExpense = expensesCtx.expenses.find(
        (expense) => expense.id === expenseId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEditing]);

    const deleteExpenseHandler = async () => {
        setIsSubmiting(true);
        try {
            await deleteExpenses(expenseId);
            expensesCtx.deleteExpense(expenseId);
            navigation.goBack();

        } catch (error) {
            setError("Try again");
            setIsSubmiting(false);
        }
    };

    const cancelHandler = () => {
        navigation.goBack();

    };

    const confirmHandler = async (expenseData) => {
        setIsSubmiting(true);
        try {
            if (isEditing) {
                expensesCtx.updateExpense(expenseId, expenseData);
                await updateExpenses(expenseId, expenseData);
            } else {
                const id = await storeExpense(expenseData);
                expensesCtx.addExpense({ ...expenseData, id: id });
            }
            navigation.goBack();

        } catch (error) {
            setError("Saving data failed");
            setIsSubmiting(false);
        }
    };

    if (isSubmiting) {
        return <LoadingOverlay />;
    }

    if (error && !isSubmiting) {
        return <ErrorOverlay message={error} />;
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
