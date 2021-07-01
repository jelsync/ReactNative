import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = () => {
    const [criptomoneda, setCriptomoneda] = useState('');
    const [moneda, setMoneda] = useState('');
    const [criptomonedas, setCriptomonedas] = useState([]);
    // console.log(criptomoneda);
    console.log(moneda);

    useEffect(() => {
        const obtenerMoneda = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setCriptomonedas(result.data.Data);
            console.log(result.data.Data);
            // console.log(result.data.Data);
        };
        obtenerMoneda();
    }, []);

    return (
        <View>
            <Text style={styles.label}>Monenda</Text>
            <Picker
                selectedValue={criptomonedas}
                onValueChange={(itemValue) =>
                    setCriptomoneda(itemValue)}
            >
                <Picker.Item label="- Seleccione -" value="" />
                <Picker.Item label="Dolar" value="BTC" />
                {/* <Picker.Item label="Lempira" value="ETH" />
                <Picker.Item label="Lempira" value="XRP" />
                <Picker.Item label="Lempira" value="USDT" />
                <Picker.Item label="Lempira" value="ADA" /> */}
            </Picker>

            <Text style={styles.label}>Criptomenda</Text>
            <Picker
                selectedValue={moneda}
                itemStyle ={styles.item1}
                onValueChange={(itemValue) =>
                    setMoneda(itemValue)}
            >
                <Picker.Item label="- Seleccione -" value="" />
                {
                    criptomonedas.map(cript => (
                        <Picker.Item key={cript.CoinInfo.Id} label={cript.CoinInfo.FullName} value={cript.CoinInfo.Name} />
                    ))
                }
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        textTransform: 'uppercase',
        fontFamily: 'Lato-Black',
        fontSize: 22,
        marginVertical: 10
    },
    item1: {
        color: 'black',
        fontSize: 40,
        // backgroundColor: "grey",
        // fontWeight:"bold",color:"#ff0000"
    }
})

export default Formulario

