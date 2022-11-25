import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Subtitle = ({ subtitle }) => {
    return (
        <View style={subtitleStyle.cont}>
            <Text style={subtitleStyle.text}>{subtitle}</Text>
        </View>
    );
};

export default Subtitle;

const subtitleStyle = StyleSheet.create({
    cont: {
        borderBottomColor: "grey",
        borderBottomWidth: 2,
        padding: 6,
        marginTop: 12, marginBottom: 24,
        marginHorizontal: 60,
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
    }
});