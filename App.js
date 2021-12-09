import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import historiaStack from './src/navigation/historiaStack';
import busquedaScreen from './src/containers/busqueda';
import usuarioStack from './src/navigation/usuarioStack';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Historia" component={historiaStack} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="book" color="black" size={25} />
          ),
        }} />
        <Tab.Screen name="Usuarios" component={usuarioStack} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="search" color="black" size={23} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}