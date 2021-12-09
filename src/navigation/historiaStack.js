import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import historiaScreen from '../containers/historia';


export default function historiaStack(){
    const historiaStack = createNativeStackNavigator();

    return(
       <historiaStack.Navigator>
           <historiaStack.Screen name="Historia" component ={historiaScreen} initialParams={{}} options={{
               title:'Historia',
               headerTitleAlign: 'center',
               headerStyle:{
                   backgroundColor:"#5d6d7e"
               },
               headerTintColor:"#fff"
           }}/>
       </historiaStack.Navigator>
    );
}