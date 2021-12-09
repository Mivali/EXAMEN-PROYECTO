import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function historiaScreen(){
    return(
        <View>
            <ScrollView  style={style.centrar}>
                <Text style={style.textoCabecera}>Bienvenido a la historia de los dispositivos móviles</Text>
                <View>
                    <Image 
                    style={style.centrar} 
                    source={require('../assets/siemens-c55-06.jpg')} />
                    <Text style={style.texto}>
                        Siemens c55. Fue anunciado en el año 2002 y tenía conectividad 2G.
                    </Text>       
                </View>
                <View>
                    <Image
                    style={{width: 250, height:350}} 
                    source={require('../assets/nokia-c3-507-g.jpeg')}/>
                    <Text style={style.texto}>
                        Nokia C3. Fue anunciado en el año 2010 y también tenía conectividad 2G. También tenía
                        wifi y bluetooth.
                    </Text>
                </View>
                <View>
                    <Image 
                        style={{width: 250, height:350}}
                        source={require('../assets/sony-ericsson-walkman.jpg')}/>      
                    <Text style={style.texto}>
                        Sony Ericsson Walkman. Anunciado en el año 2009, destacó por sus botones diseñados especialmente para 
                        reproducir música en el dispositivo.
                    </Text>
                </View>
                <View>
                    <Image 
                        style={{width: 250, height:350}}
                        source={require('../assets/alcatel-one-touch.png')}/>
                    <Text style={style.texto}>
                        Alcatel One Touch. Salió a la venta en el año 2015. Es un teléfono móvil básico, y destaca por ser
                        uno de los teléfonos móviles más ligeros del mercado, pues pesa solamente 200 gramos.
                        </Text>    
                </View>
                <View>
                    <Image
                        style={{width: 290, height:350}}  
                        source={require('../assets/iphone-3g.jpg')}/>
                    <Text style={style.texto}>
                        iPhone 3g. Lanzado en el año 2008, tenía conectividad 3g, y una memoria de almacenamiento de 8GB.
                     </Text>     
                </View>
                <View>
                    <Image
                        style={{width: 250, height:350}}
                        source={require('../assets/835863-nokia-3220.jpg')}/>
                        <Text style={style.texto}>
                            Nokia 3220. Tenía luces parpadeantes a los laterales. Tenía una funcionalidad, llamada Wave Message, 
                            que, cuando agitábamos el móvil aparecía en la carcasa un mensaje que habíamos preconfigurado.
                        </Text>
                </View>
                <View>
                    <Image
                        style={{width: 250, height:350}}  
                        source={require('../assets/blackberry-torch.jpg')}/>
                    <Text style={style.texto}>
                        BlackBerry Torch. Constaba de una pantalla táctil y teclado deslizando, lo que supuso una innovación 
                        para la época. También tenía un trackpad óptico para navegar por la pantalla, que era el toque
                        distintivo de las blackberry. 
                        </Text>
                </View>
                <View>
                    <Image
                        style={{width: 250, height:350}}
                        source={require('../assets/motorola-v3-1065-g.jpg')}/>
                    <Text style={style.texto}>
                        Motorola V3. Salió al mercado en el 2004, y su diseño era su principal atractivo. Los números en el teclado
                        fueron grabados dentro de una pantalla electro-luminiscente. Es el precursor del Motorola Razr actual.
                        </Text>
                </View>
                <View>
                    <Image
                        style={{width: 250, height:350}}
                        source={require('../assets/xiaomi-mi-10T.png')} />
                    <Text style={style.texto}>
                        Xiaomi Mi 10T. Es uno de los modelos de Xiaomi. Tiene 8 gigas de RAM y 128 gigas de almacenamiento. Tiene
                        conectividad 5G y fue lanzado a principios de este año.
                        </Text>
                </View>
            </ScrollView>
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
        fontSize:28,
        textAlign: 'center',
        fontWeight: 'bold'
        
    },
    texto:{
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
        
    }


})