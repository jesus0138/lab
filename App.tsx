import { ScrollView, StyleSheet } from 'react-native';
import Saludo from './src/componentes/saludo';
<<<<<<< HEAD
import ListaTareas from './src/componentes/arreglo2';
import CustomButton from './src/componentes/Edad';
import UseEffectScreen from './src/componentes/UseEffectScreen';
import UseEffect from './src/componentes/UseEffectArreglo';
=======
import ListaTareas from './src/componentes/Arreglo';
import CustomButton from './src/componentes/Edad';
>>>>>>> 131c99a61b1d5c7f7c63adb308104545fd32e1e9

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
<<<<<<< HEAD
      
     <UseEffect />
    <UseEffectScreen />

      
=======
      <Saludo />
      <ListaTareas />
      <CustomButton titulo="Edad" textoboton="Verificar Edad" />
>>>>>>> 131c99a61b1d5c7f7c63adb308104545fd32e1e9
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
});
