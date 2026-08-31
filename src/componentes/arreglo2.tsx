import { StyleSheet, Text, View } from 'react-native';

const Lista_Materiales=[ // Arreglo de objetos que me sirve para mostrar los materiales en la pantalla
    
{id: 1, 
nombre: 'borneras',
completada: true},

{id: 2, nombre: 'lapices', completada: true},
{id: 3, nombre: 'cuadernos', completada: false},
{id: 4, nombre: 'gomas', completada: false},
];

export default function Lista() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Mis Materiales</Text>

      {Lista_Materiales.map((material) => (   // Mapeo de la lista de materiales
        <View key={material.id} style={styles.item}> // Cada material se representa como un View con un Text y en singular se muestra el nombre del material y si está completado o no
          <Text style={styles.texto}>
            {material.completada ? '✓' : '○'} {material.nombre} // operador ternario para mostrar un check si está completado o un círculo si no lo está
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
