import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { categories } from '../../data/dummy-data';
import CategoryTile from '../components/CategoryTile';



const Home = () => {
    return (

        <FlatList data={categories}
            keyExtractor={(item) => item.id}

            renderItem={
                <Text style={{ color: "black" }}>hello</Text>
            } />

    );
};

export default Home;