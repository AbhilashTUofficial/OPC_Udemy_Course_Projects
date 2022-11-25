import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import MealsView from '../Components/MealsView';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const MealsViewScreen = ({ navigation }) => {

    const route = useRoute();
    const id = route.params.id;

    //! feels like useLayoutEffect is lower compare to useEffect.
    useLayoutEffect(() => {
        const screenTitle = CATEGORIES.find((category) => category.id === id).title;
        navigation.setOptions({ title: screenTitle });
    }, [id, navigation]);

    const currentMeals = MEALS.filter((item) => {
        return (item.categoryIds.indexOf(id) >= 0);
    });

    return (<View>
        <FlatList
            data={currentMeals}
            keyExtractor={(item) => item.id}
            renderItem={(meals) => {

                const item = meals.item;
                const mapStateToProps = {
                    id: item.id,
                    title: item.title,
                    imgUrl: item.imageUrl,
                    affordability: item.affordability,
                    complexity: item.complexity,
                    duration: item.duration,
                };
                return (
                    <MealsView {...mapStateToProps} />);
            }} />
    </View>);
};

export default MealsViewScreen;