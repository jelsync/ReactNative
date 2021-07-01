import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cotizacion = ({resultado}) => {

    return (
        <View>
            <Text>{resultado.PRICE}</Text>
        </View>
    )
}

export default Cotizacion

const styles = StyleSheet.create({})
