import { StyleSheet, View } from 'react-native';
import ListaTareas from './src/componentes/Arreglo';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaTareas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});