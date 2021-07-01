import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Header = () => {
    return (
        <>
            <View style={styles.contenido}>
                <Text style={styles.encabezados}>Criptomendas</Text>
            </View>
            <Image
                style={styles.imagen}
                source={require('../assets/img/cryptomonedas.png')}
            />
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    encabezados: {
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        textAlign: 'center',
        paddingVertical: 10,
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 30
    },
    imagen: {
        width: '100%',
        height: 150,
        // marginHorizontal:'2.5%'
      }
})
