import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({ criptomoneda, setCriptomoneda, moneda, setMoneda, setApi}) => {
   
    const [criptomonedas, setCriptomonedas] = useState([]);

    useEffect(() => {
        const obtenerMonedas = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setCriptomonedas(result.data.Data);
        };
        obtenerMonedas();
    }, []);

    const cotizarMoneda = () => {
        if (criptomoneda.trim() === '' || moneda.trim() === '') {
            validarFormulario();
            return;
        }
        setApi(true);
    }

    const validarFormulario = () => {
        Alert.alert(
            'Error',
            'Campos vacios',
            [
                { text: 'OK' }
            ]
        );
    }

    return (
        <View style={styles.contenido}>
            <Text style={styles.label}>Monenda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={(itemValue) =>
                    setMoneda(itemValue)}
            >
                <Picker.Item label="- Seleccione -" value="" />
                <Picker.Item label="Dolar" value="USD" />
                <Picker.Item label="Euro" value="EUR" />

            </Picker>

            <Text style={styles.label}>Criptomenda</Text>
            <Picker
                selectedValue={criptomoneda}
                onValueChange={(itemValue) =>
                    setCriptomoneda(itemValue)}
            >
                <Picker.Item label="- Seleccione -" value="" />
                {
                    criptomonedas && criptomonedas.map(cript => (
                        <Picker.Item key={cript.CoinInfo.Id} label={cript.CoinInfo.FullName} value={cript.CoinInfo.Name} />
                    ))
                }
            </Picker>
            <TouchableHighlight
                style={styles.btnCotiazr}
                onPress={() => cotizarMoneda()}
            >
                <Text style={styles.textoCotizar}>Cotizar</Text>

            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    contenido: {
        marginHorizontal: '2.5%'
    },
    label: {
        textTransform: 'uppercase',
        fontFamily: 'Lato-Black',
        fontSize: 22,
        marginVertical: 10
    },
    btnCotiazr: {
        backgroundColor: '#5E49E2',
        paddingVertical: 10,
        marginTop: 10
    },
    textoCotizar: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        textTransform: 'uppercase',
        fontFamily: 'Lato-Black'
    }
})

export default Formulario

