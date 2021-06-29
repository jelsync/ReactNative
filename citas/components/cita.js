import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Cita = ({ item }) => {
    return (
        <View style={styles.contenedor}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.texto} >{item.paciente}</Text>
            </View>
            <View >
                <Text style={styles.label}>Sintoma: </Text>
                <Text style={styles.texto} >{item.sintomas}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5
    },
    texto: {
        fontSize: 18,
    }
});


export default Cita;
