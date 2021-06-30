import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Cita from './components/cita';
import Formulario from './components/formulario';

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false)
  const [citas, setCitas] = useState([]);

  const eliminarPaciente = (id) => {
    setCitas((nuevasCitas) => {
      return nuevasCitas.filter(cita => cita.id !== id);
    });
  };

  const mostraFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <View>
          <TouchableHighlight onPress={() => mostraFormulario()} style={styles.textoMostrarForm}>
            <Text style={styles.textoCrear}>{mostrarForm ? 'Cancelar Citas' : 'Crear Cita'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {
            mostrarForm ? (
              <>
                <Text style={styles.titulo}>Crear Nueva Citas</Text>
                <Formulario citas={citas} setCitas={setCitas} setMostrarForm={setMostrarForm} />
              </>
            ) : (
              <>
                <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus Citas' : 'Administrador de Citas'}</Text>
                <FlatList
                  style={styles.listado}
                  data={citas}
                  renderItem={({ item }) => <Cita item={item} eliminarPaciente={eliminarPaciente} />}
                  keyExtractor={cita => cita.id}
                />
              </>
            )
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado: {
    flex: 1
  },
  textoMostrarForm: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
    marginHorizontal: 15
  },
  textoCrear: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
