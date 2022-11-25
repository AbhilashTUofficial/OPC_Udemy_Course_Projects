import React, { Component } from 'react';
import { Pressable, Text, View } from 'react-native';

const CategoryTile = ({ text, color }) => {
    return (<View>
        <Pressable>
            <Text>{text}</Text>
        </Pressable>
    </View>);
};

export default CategoryTile;