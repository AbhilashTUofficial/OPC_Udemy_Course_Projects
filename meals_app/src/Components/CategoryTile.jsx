import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const CategoryTile = ({ title, color, handler }) => {
    return (<View style={[GirdTile.cont, { backgroundColor: color }]}>
        <Pressable
            android_ripple={{ color: "lightgray" }}
            style={({ pressed }) => [{ flex: 1 }, pressed ? { opacity: 0.3 } : null]}
            onPress={handler}>
            <View style={GirdTile.catCont}>
                <Text style={GirdTile.text}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>);
};

export default CategoryTile;

const GirdTile = StyleSheet.create({
    cont: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        // on ios overflow hidden will remove shadow.
        overflow: Platform.OS === 'android' ? "hidden" : 'visible',

        // ios
        shadowColor: 'black',
        shadowOffset: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,

    },
    catCont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,

    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
    }
});