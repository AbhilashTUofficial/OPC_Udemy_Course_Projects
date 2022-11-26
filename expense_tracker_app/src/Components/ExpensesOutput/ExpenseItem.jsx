import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants';
import { FormatDate } from '../../util/FormatDate';

function ExpenseItem({ id, description, amount, date }) {

    const navigation = useNavigation();
    const expenseHandler = () => {
        navigation.navigate("manageexpense", {
            expenseId: id,
        });
    };

    return (
        <Pressable
            onPress={expenseHandler}
            style={({ pressed }) => pressed && expenseItemStyles.pressed}
            android_ripple>
            <View style={expenseItemStyles.item}>
                <View>
                    <Text style={[expenseItemStyles.text, expenseItemStyles.desc]}>
                        {description}
                    </Text>
                    <Text style={expenseItemStyles.text}>{FormatDate(date)}</Text>
                </View>
                <View style={expenseItemStyles.amtCont}>
                    <Text style={expenseItemStyles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default ExpenseItem;

const expenseItemStyles = StyleSheet.create({
    item: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        // android
        elevation: 3,
        // ios
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    text: {
        color: GlobalStyles.colors.primary50,
    },
    desc: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    amtCont: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75,
    },
});