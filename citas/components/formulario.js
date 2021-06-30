import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [paciente, setPaciente] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [telefono, setTelefono] = useState('');
    // const [hora, setHora] = useState('');


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmarFecha = (date) => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' }
        setFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (time) => {
        const opciones = { hour: 'numeric', minute: '2-digit' }
        setHora(time.toLocaleString('es-US', opciones));
        hideTimePicker();
    };

    const crearCita = () => {
        if (paciente.trim() == '' ||
            telefono.trim() == '' ||
            sintomas.trim() == '' ||
            fecha.trim() == '' ||
            hora.trim() == '') {
                monstrarAlert();
                return true;
        }
        return false;
    }
    
    const monstrarAlert = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text:'OK'
            }]
        )
    }
    


    return (
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setPaciente(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Telfono:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setTelefono(texto)}
                        keyboardType='number-pad'
                    />
                </View>
                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <Button title="Elije una fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                    />
                    <Text>{fecha}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Button title="Elije una hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                    />
                    <Text>{hora}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Sintomas:</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={(texto) => setSintomas(texto)}
                    />
                </View>
                <View>
                    <TouchableHighlight onPress={() => crearCita()} style={styles.btnCrear}>
                        <Text style={styles.textoCrear}>Crear Citas</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
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
    btnCrear: {
        padding: 10,
        backgroundColor: '#AA076B',
        marginVertical: 10,
        textAlign: 'center'
    },
    textoCrear: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
