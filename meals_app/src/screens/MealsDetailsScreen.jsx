import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import List from '../Components/List';
import MealsDetails from '../Components/MealsDetail';
import Subtitle from '../Components/Subtitle';
import { MEALS } from '../data/dummy-data';

const MealsDetailsScreen = ({ route, navigation }) => {

    const mealId = route.params.id;

    const currentMeal = MEALS.find((meal) => meal.id === mealId);

    return (<ScrollView>
        <Image source={{ uri: currentMeal.imageUrl }} style={mealsDetailsStyles.img} />
        <Text style={mealsDetailsStyles.title}>{currentMeal.title}</Text>
        <MealsDetails
            complexity={currentMeal.complexity}
            duration={currentMeal.duration}
            affordability={currentMeal.affordability} />

        <Subtitle subtitle={"Ingredients"} />
        <List list={currentMeal.ingredients} />
        <Subtitle subtitle={"Steps"} />
        <List list={currentMeal.steps} />

    </ScrollView>);
};

export default MealsDetailsScreen;

const mealsDetailsStyles = StyleSheet.create({
    img: {
        width: "100%",
        height: 230,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        color: "black",
        textAlign: "center",
        marginVertical: 16,
    }
});