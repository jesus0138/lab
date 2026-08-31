import { StyleSheet, Text, View } from 'react-native';

// Arreglo de objetos


const lista_utiles=[
  { id: 1, nombre: 'Lapiz', completada: true },
  { id: 2, nombre: 'Cuaderno', completada: true },
  { id: 3, nombre: 'Borrador', completada: false },
  { id: 4, nombre: 'Goma', completada: false },
];

export default function ListaTareas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mis utiles</Text>

      {lista_utiles.map(
        (Lista_utiles) => (

        <View key={Lista_utiles.id} style={styles.item}>

          <Text style={styles.texto}>

            {Lista_utiles.completada ? '✓' : '○'} {Lista_utiles.nombre}

          </Text>

        </View>

      )
      )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
  },
  texto: {
    fontSize: 16,
  },
});