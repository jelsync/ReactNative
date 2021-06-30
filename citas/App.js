import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Cita from './components/cita';

const App = () => {
  const [citas, setCitas] = useState([
    { id: '1', paciente: 'Jelsyn', sintomas: 'No come' },
    { id: '2', paciente: 'jose', sintomas: 'No come2' },
    { id: '3', paciente: 'jose', sintomas: 'No come2' },
    { id: '4', paciente: 'Puto', sintomas: 'Bryan se la come' }
  ]);

  const eliminarPaciente = (id) => {
    setCitas((nuevasCitas) => {
      return nuevasCitas.filter(cita => cita.id !== id);
    });
  }


  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <FlatList
        data={citas}
        renderItem={({ item }) => <Cita item={item} eliminarPaciente={eliminarPaciente} />}
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
