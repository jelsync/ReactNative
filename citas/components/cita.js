import React from 'react'
import { View, Text } from 'react-native'

const Cita = ({item}) => {
    return (
        <View>
            <Text>{item.paciente}</Text>
        </View>
    )
}

export default Cita;
