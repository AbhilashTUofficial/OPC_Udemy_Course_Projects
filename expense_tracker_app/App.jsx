import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, View } from 'react-native';
import ManageExpense from './src/screens/ManagaeExpense';
import RecentExpenses from './src/screens/RecentExpenses';
import AllExpenses from './src/screens/AllExpenses';
import { GlobalStyles } from './src/constants';
import Icon from './src/Components/common/Icon';
import IconBtn from './src/Components/common/IconBtn';
import ExpensesCnxtProvider from './src/store/expenseContext';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();


  const ExpenseOverview = () => {
    return (
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: () => (
            <IconBtn
              icon={require("./src/assets/icons/add_icon.png")} size={24}
              onPress={() => {
                navigation.navigate('manageexpense');
              }}
            />
          ),

        })}>
        <Tab.Screen name="recentexpenses" component={RecentExpenses}
          options={{
            title: "Recent Expenses",
            tabBarLabel: "Recent",
            tabBarIcon: () => <Icon icon={require("./src/assets/icons/recent_icon.png")} size={36} />
          }} />
        <Tab.Screen name="allexpenses" component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarLabel: "Expenses",
            tabBarIcon: () => <Icon icon={require("./src/assets/icons/expenses_icon.png")} size={32} />

          }} />

      </Tab.Navigator>
    );
  };

  return (

    <ExpensesCnxtProvider>

      <StatusBar barStyle={"light-content"} backgroundColor={GlobalStyles.colors.primary500} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}>
          <Stack.Screen name="expenseoverview" component={ExpenseOverview}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="manageexpense" component={ManageExpense}
            options={{
              presentation: "modal"
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesCnxtProvider>

  );
};

export default App;
