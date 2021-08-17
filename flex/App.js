import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <>
    <View style={styles.contenedor}>

      <Text style={styles.encabezado} >Hola mundo!</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'cornflowerblue',
  },
  encabezado: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 50
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
