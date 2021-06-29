import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

const App = () => {
  const [citas, setCitas] = useState([
    { id: '1', paciente: 'Jelsyn', sintomas: 'No come' },
    { id: '2', paciente: 'Jelsyn2', sintomas: 'No come2' },
    { id: '3', paciente: 'Jelsyn3', sintomas: 'No come3' }
  ]);


  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <FlatList
        data={citas}
        renderItem={({ item }) => (
          <View>
            {/* <Text>{item.id}</Text> */}
            <Text>{item.paciente}</Text>
          </View>
        )}
        keyExtractor={cita => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },

  titulo: {
    color: '#FFF',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;
