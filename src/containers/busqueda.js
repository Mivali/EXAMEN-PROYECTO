import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

export default function busquedaScreen({ navigation }) {
    const [edad, setEdad] = useState();
    
    return (
        <View style={styles.centrar}>
            <Text style={styles.textoCabecera}>Busca aquí a tus usuarios por edad</Text>
            <TextInput
                style={styles.input}
                placeholder="Introduzca la edad"
                onChangeText={edad => setEdad(edad)}
                value={edad}
            />

            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Usuarios', {edad})}>
               <Text style={styles.texto}>Buscar</Text>      
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderRadius:7,
        padding: 10,
        borderColor: '#86908f',
        marginTop: 100
    },
    centrar:{
        marginTop: 25,
        textAlign: 'center',
        marginLeft:50,
        marginRight:50,
        fontSize: 16
    },
    boton:{
        alignItems: "center",
        backgroundColor: "#98b4cf",
        padding: 10,
        marginTop:230 

    },
    texto:{
       fontSize:17,
       color:"white"

    },
    textoCabecera:{
        fontSize:30,
        fontWeight: 'bold'

    }
   
});