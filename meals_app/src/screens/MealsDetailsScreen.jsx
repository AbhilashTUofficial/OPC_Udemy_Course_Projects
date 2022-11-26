import React, { useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderBtn from '../Components/headerBtn';
import List from '../Components/List';
import MealsDetails from '../Components/MealsDetail';
import Subtitle from '../Components/Subtitle';
import { MEALS } from '../data/dummy-data';
import { FavoriteContext } from '../State_Managment/context/FavoriteContext';

const MealsDetailsScreen = ({ route, navigation }) => {

    const mealId = route.params.id;

    const currentMeal = MEALS.find((meal) => meal.id === mealId);

    const favMealsContext = useContext(FavoriteContext);

    const isFaved = favMealsContext.ids.includes(mealId);


    const heartIcon = "../assets/heart.png";
    const emptyHeartIcon = "../assets/empty_heart.png";


    const favHandler = () => {
        console.log("called");

        if (isFaved) {
            favMealsContext.removeFromFav(mealId);
        } else {
            favMealsContext.addToFav(mealId);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <HeaderBtn icon={isFaved ? heartIcon : emptyHeartIcon} handler={favHandler} />;
            }
        });
    });



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