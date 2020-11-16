import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }from 'react';
import Map from './components/Map'
import Database from './components/Database'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
const Stack = createStackNavigator();


export default function App() {
  // post("MihirBafna", geocoords)  
  // var x,y = get("MihirBafna");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Database"
          component={Database}
          options={{ title: 'Database Demo' }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ title: 'Map Demo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
