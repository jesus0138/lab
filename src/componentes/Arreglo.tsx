import { StyleSheet, Text, View } from 'react-native';

// Arreglo de objetos
const tareas = [
  { id: 1, nombre: 'Estudiar React Native', completada: true },
  { id: 2, nombre: 'Hacer el laboratorio', completada: false },
  { id: 3, nombre: 'Repasar TypeScript', completada: false },
  { id: 4, nombre: 'Entregar la tarea', completada: false },
];

export default function ListaTareas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mis tareas</Text>

      {tareas.map((tarea) => (
        <View key={tarea.id} style={styles.item}>
          <Text style={styles.texto}>
            {tarea.completada ? '✓' : '○'} {tarea.nombre}
          </Text>
        </View>
      ))}
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