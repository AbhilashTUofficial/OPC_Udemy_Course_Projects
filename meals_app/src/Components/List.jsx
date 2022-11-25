import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = ({ list }) => {
    return list.map((i, index) => (
        <View key={index} style={listStyles.cont}>
            <Text style={listStyles.text}>{i}</Text>
        </View>
    ));
};

export default List;

const listStyles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        padding: 12,
        alignItems: "center",
        borderColor: "grey",
        borderBottomWidth: 1,
        marginVertical: 6,
    },
    text: {
        fontSize: 16,
    }
});