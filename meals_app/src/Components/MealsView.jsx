import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MealsDetails from './MealsDetail';

const MealsView = ({ id, title, imgUrl, duration, complexity, affordability }) => {

    const navigation = useNavigation();

    const detailsViewHandler = () => {
        navigation.navigate("mealsdetailsscreen", { id: id });
    };

    return (<View style={mealsViewStyles.cont}>
        <Pressable style={mealsViewStyles.card}
            onPress={detailsViewHandler}>
            <View>
                <Image source={{ uri: imgUrl }}
                    style={mealsViewStyles.img} />
                <Text style={mealsViewStyles.title}>{title.toUpperCase()}</Text>
                <MealsDetails
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability} />

            </View>
        </Pressable>
    </View>);
};

export default MealsView;

const mealsViewStyles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        flex: 1,
        width: "90%",
        elevation: 4,
        backgroundColor: "white",
        marginVertical: 16,
        borderRadius: 8,
        overflow: "hidden"
    },
    img: {
        width: "100%",
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
        marginVertical: 12
    },

});