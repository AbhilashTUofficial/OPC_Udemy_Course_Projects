import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StatusBar} from 'react-native';
import HeaderBtn from './src/Components/headerBtn';
import CategoryScreen from './src/screens/CategoryScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import MealsDetailsScreen from './src/screens/MealsDetailsScreen';
import MealsViewScreen from './src/screens/MealsViewScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  const Drawer = createDrawerNavigator();

  //! Currently there is a bug on the react-native-reanimated source module.
  //! to solve that add a reanimated plugin to babel file and reset npm cache
  //! plugins: ['react-native-reanimated/plugin'], (add to bable.config.js)
  //! npm start -- --reset-cache (reset the cache on npm)
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          sceneContainerStyle: {backgroundColor: 'white'},
          drawerActiveBackgroundColor: '#e09090',
          drawerActiveTintColor: '#F15060',
        }}>
        <Drawer.Screen
          options={{
            title: 'Categories',
            drawerIcon: () => (
              <Image
                source={require('./src/assets/category.png')}
                style={{width: 24, height: 24}}
              />
            ),
          }}
          name="categoryscreen"
          component={CategoryScreen}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({color, size}) => (
              <Image
                source={require('./src/assets/heart.png')}
                style={{width: 24, height: 24}}
              />
            ),
          }}
          name="favoritescreen"
          component={FavoriteScreen}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: 'white'},
          }}>
          <Stack.Screen
            name="drawer"
            options={{
              headerShown: false,
            }}
            component={DrawerNavigator}
          />
          <Stack.Screen name="mealsviewscreen" component={MealsViewScreen} />
          <Stack.Screen
            name="mealsdetailsscreen"
            component={MealsDetailsScreen}
            options={{
              title: 'Meal Details',
              headerRight: () => {
                return <HeaderBtn />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
