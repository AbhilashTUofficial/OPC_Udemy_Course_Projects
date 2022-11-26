import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';


const HeaderBtn = ({ icon, handler }) => {


    return (
        <Pressable style={headerBtnStyles.cont}
            onPress={handler}>
            <Image source={{ uri: icon }}
                style={headerBtnStyles.img} />
        </Pressable>);
};

export default HeaderBtn;

const headerBtnStyles = StyleSheet.create({
    cont: {
        elevation: 2,
        backgroundColor: "white",
        borderRadius: 30,
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
    },
    img: {
        width: 24,
        height: 24,
    }
});