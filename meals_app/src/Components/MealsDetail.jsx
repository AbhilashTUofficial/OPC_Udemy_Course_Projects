import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MealsDetails = ({ duration, complexity, affordability }) => {
    return (

        <View style={mealsDetailsStyles.details}>
            <Text style={mealsDetailsStyles.text}>{duration}m</Text>
            <Text style={mealsDetailsStyles.text}>{complexity.toUpperCase()}</Text>
            <Text style={mealsDetailsStyles.text}>{affordability.toUpperCase()}</Text>
        </View>
    );


};

export default MealsDetails;

const mealsDetailsStyles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "center",
    },

    text: {
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 8,
        marginHorizontal: 8,
    }
});