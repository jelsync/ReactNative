
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Header from "./components/Header";
import Formulario from "./components/Formulario";

const App = () => {
  
  return (
    <>
      <Header />
      <View style={styles.contenido}>
        <Formulario />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginHorizontal: '2.5%'
  }

});

export default App;
