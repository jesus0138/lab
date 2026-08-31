import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function UseEffectScreen() {
  const [contador, setContador] = useState(0);

  // ─────────────────────────────────────────────────────────────
  // useEffect SIN arreglo de dependencias
  // Definición: este useEffect se ejecuta después de CADA render
  // del componente, sin importar qué estado o prop haya cambiado.
  // Se usa cuando se necesita ejecutar lógica en cada actualización
  // del componente, por ejemplo: registrar actividad o sincronizar
  // datos externos en cada ciclo de render.
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log('useEffect SIN dependencias → componente renderizado');
  });

  // ─────────────────────────────────────────────────────────────
  // useEffect CON arreglo de dependencias [contador]
  // Definición: este useEffect se ejecuta SOLO cuando el valor
  // de "contador" cambia. El arreglo de dependencias le indica
  // a React qué valores debe observar para decidir si ejecuta
  // el efecto o no.
  // Se usa cuando se necesita reaccionar a cambios específicos
  // de estado o props, evitando ejecuciones innecesarias.
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(`useEffect CON dependencias → contador cambió a: ${contador}`);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.contador}>{contador}</Text>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => setContador((c) => c + 1)}
      >
        <Text style={styles.botonTexto}>+ Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.boton, styles.botonReset]}
        onPress={() => setContador(0)}
      >
        <Text style={styles.botonTexto}>Resetear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecefb9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },
  contador: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 30,
  },
  boton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    width: 200,
    marginBottom: 10,
  },
  botonReset: {
    backgroundColor: '#999',
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});