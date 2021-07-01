import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <View style={styles.contenedor}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row'
  },
  banner: {
    height: 250,
    flex: 1,
  },
});

export default App;
