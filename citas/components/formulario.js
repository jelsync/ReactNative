import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Formulario = () => {
    return (
        <>
            <View style={styles.formulario}>
                {/* <Text style={styles.titulo}>Administra tus Citas</Text> */}
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Sintomas:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
            </View>
        </>
    )
}

export default Formulario

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
})
