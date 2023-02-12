import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import TasksScreen from '../screens/Tasks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RecipesStack } from './RecipesStack';

const Tabs = createBottomTabNavigator();



  

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen  options={{
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="star" color={'blue'} size={size} />
      ),
    }} name="Recettes" component={RecipesStack} />
        <Tabs.Screen  options={{
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="shopping" color={'blue'} size={size} />
      ),
    }} name="Listes" component={TasksScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

