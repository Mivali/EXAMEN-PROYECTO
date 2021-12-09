import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import busquedaScreen from '../containers/busqueda';
import usuariosScreen from '../containers/usuarios';

export default function usuarioStack({ }) {
    const usuarioStack = createNativeStackNavigator();

    return (
        <usuarioStack.Navigator>
            <usuarioStack.Screen name="Busqueda" component={busquedaScreen} initialParams={{}} options={{
                title: 'Búsqueda',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "#5d6d7e"
                },
                headerTintColor: "#fff"
            }} />
            <usuarioStack.Screen name="Usuarios" component={usuariosScreen} options={{
                title: 'Usuarios',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: "#5d6d7e"
                },
                headerTintColor: "#fff"
            }} />
        </usuarioStack.Navigator>
    );
}

