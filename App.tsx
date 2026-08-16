import { ScrollView, StyleSheet } from 'react-native';
import Saludo from './src/componentes/saludo';
import ListaTareas from './src/componentes/Arreglo';
import CustomButton from './src/componentes/Edad';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Saludo />
      <ListaTareas />
      <CustomButton titulo="Edad" textoboton="Verificar Edad" />
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
