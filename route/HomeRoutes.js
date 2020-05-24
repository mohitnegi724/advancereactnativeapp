import React from 'react';
import Home from '../screens/HomeScreen'
import { Ionicons } from '@expo/vector-icons';
import CompletedTasks from '../screens/CompletedTasks'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function HomeRoute(){
  return(
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
     <Tab.Screen name="Home" component={Home}/>
     <Tab.Screen name="CompletedTasks" component={CompletedTasks} />
    </Tab.Navigator>
  )
}
