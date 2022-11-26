import { FlatList } from 'react-native';

import ExpenseItem from './ExpenseItem';

function expenseItem(itemData) {
    return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={expenseItem}
        />
    );
}

export default ExpensesList;