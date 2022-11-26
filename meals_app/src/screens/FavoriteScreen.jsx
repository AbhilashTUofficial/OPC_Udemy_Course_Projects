import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { FavoriteContext } from '../State_Managment/context/FavoriteContext';


const FavoriteScreen = () => {
    const favMealsContext = useContext(FavoriteContext);

    const favList = MEALS.filter((meal) => favMealsContext.ids.includes(meal.id));
    favList.map((item) => {
        console.log(item.id);
        <Text>{item.id}</Text>;
    });
};

export default FavoriteScreen;