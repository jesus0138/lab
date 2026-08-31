import { ScrollView, StyleSheet } from 'react-native';
import Saludo from './src/componentes/saludo';
import ListaTareas from './src/componentes/arreglo2';
import CustomButton from './src/componentes/Edad';
import UseEffectScreen from './src/componentes/UseEffectScreen';
import UseEffect from './src/componentes/UseEffectArreglo';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
     <UseEffect />
    <UseEffectScreen />

      
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