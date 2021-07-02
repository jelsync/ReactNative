import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const Cotizacion = ({ criptomoneda, moneda, setApi, api }) => {

    const [resultado, setResultado] = useState({});

    useEffect(() => {
        const cotizarMoneda = async () => {
            if (api) {
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
                const resultado = await axios.get(url);
                setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
                // console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
                setApi(false);
            }
        }
        cotizarMoneda();
    }, [api]);

    if(Object.keys(resultado).length === 0) return null;

    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}> {resultado.PRICE}</Text>
            </Text>
            <Text style={styles.texto}> Precio mas alto del dia: {' '}
                <Text style={styles.span}> {resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}> Precion mas bajo del dia: {' '}
                <Text style={styles.span}> {resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}> Variacion ultimas 24 horas: {' '}
                <Text style={styles.span}> {resultado.CHANGE24HOUR}</Text>
            </Text>
            <Text style={styles.texto}> Utima Actualizacion: {' '}
                <Text style={styles.span}> {resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

export default Cotizacion

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5E49E2',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20
    },
    texto: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10,
    },
    precio: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black'
    },
})
