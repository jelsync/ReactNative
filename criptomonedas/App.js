
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";

const App = () => {
  const [criptomoneda, setCriptomoneda] = useState('');
  const [moneda, setMoneda] = useState('');
  const [api, setApi] = useState(false);
  const [resultado, setResultado] = useState({});
  useEffect(() => {
    const cotizarMoneda = async () => {
      if (api) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        setApi(false);
      }
    }
    cotizarMoneda();
  }, [api]);
  return (
    <>
      <Header />
      <Formulario
        criptomoneda={criptomoneda}
        setCriptomoneda={setCriptomoneda}
        moneda={moneda}
        setMoneda={setMoneda}
        setApi={setApi}
      />
      <Cotizacion
        resultado={resultado}
      />
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
