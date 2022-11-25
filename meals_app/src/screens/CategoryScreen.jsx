import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryTile from '../Components/CategoryTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoryScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(cateogry) => cateogry.id}
                renderItem={(category) => {
                    return (
                        <CategoryTile title={category.item.title}
                            color={category.item.color}
                            handler={() => navigation.navigate("mealsviewscreen", { id: category.item.id })} />);
                }}
                numColumns={2}
            />
        </View>
    );
};

export default CategoryScreen;


