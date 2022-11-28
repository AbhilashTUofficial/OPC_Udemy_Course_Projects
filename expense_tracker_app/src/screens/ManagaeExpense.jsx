import React, { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomBtn from '../Components/common/CustomBtn';
import IconBtn from '../Components/common/IconBtn';
import { GlobalStyles } from '../constants';
import { ExpensesContext } from '../store/expenseContext';


const ManageExpense = ({ route, navigation }) => {

    //! ?: null safety operator.
    const expenseId = route.params?.expenseId;
    //! !!: convert a falsey value to false and truesy value to true.
    const isEditing = !!expenseId;

    const expensesCtx = useContext(ExpensesContext);

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

    function confirmHandler() {
        if (isEditing) {
            expensesCtx.updateExpense(
                expenseId,
                {
                    description: 'Test 001',
                    amount: 99.99,
                    date: new Date('2022-11-30'),
                }
            );
        } else {
            expensesCtx.addExpense({
                description: 'Test 002',
                amount: 19.99,
                date: new Date('2022-11-29'),
            });
        }
        navigation.goBack();
    }

    return (

        <View style={manageExpenseStyles.cont}>
            <View style={manageExpenseStyles.btns}>
                <CustomBtn style={manageExpenseStyles.btn} mode="flat" onPress={cancelHandler}>
                    Cancel
                </CustomBtn>
                <CustomBtn style={manageExpenseStyles.btn} onPress={confirmHandler}>
                    {isEditing ? 'Update' : 'Add'}
                </CustomBtn>
            </View>
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
    btns: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    delCont: {
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
    },
});
