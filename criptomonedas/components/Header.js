import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.contenido}>
            <Text style={styles.encabezados}>Criptomendas</Text>
        </View>
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
        // marginBottom: 30
    }
})
