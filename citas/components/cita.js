import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Cita = ({ item, eliminarPaciente }) => {

    const dialogoEliminar = (id) => {
        eliminarPaciente(id); 
    }
    

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
            <View>
                <TouchableHighlight onPress={()=>dialogoEliminar(item.id)} style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar &times;</Text>
                </TouchableHighlight>
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
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});


export default Cita;
