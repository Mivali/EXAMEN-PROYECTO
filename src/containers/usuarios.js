import { TabRouter } from '@react-navigation/routers';
import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function usuariosScreen({ navigation, route }) {

    const [users, setUsers] = useState([
        { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
        { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
        { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
        { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
        { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
        { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
        { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
        { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
        { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
        { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
        { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
        { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
        { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
        { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
        { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
        { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
        { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
        { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }
    ]);

    const { edad } = route.params;

    return (

        <View style={style.centrar}>
            <Text style={style.textoCabecera}>Los usuarios con {edad} años, o menores, son: </Text>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    if (item.age <= edad) {
                        return (
                            <Text style={style.textoUsuarios}>
                                Nombre: {item.name}, edad: {item.age}, sexo: {item.sex}
                            </Text>
                            
                        )
                    }
                }}
            />
        </View>

    );

}

const style=StyleSheet.create({
    centrar:{
        marginTop: 25,
        textAlign: 'center',
        marginLeft:50,
        marginRight:50,
        fontSize: 16
    },
  
    textoCabecera:{
        fontSize:30,
        fontWeight: 'bold'
        
    },
    textoUsuarios:{
        fontSize:15,
        marginTop:20
    }

})
