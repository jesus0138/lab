import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function UseEffect() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('Presiona incrementar para comenzar');

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
  // useEffect con arreglo VACÍO []
  // Definición: este useEffect se ejecuta UNA SOLA VEZ cuando el
  // componente se monta por primera vez. El arreglo vacío le indica
  // a React que no hay dependencias que observar, por lo tanto
  // nunca se vuelve a ejecutar aunque el componente se actualice.
  // Se usa para inicializaciones, llamadas a APIs o suscripciones
  // que solo deben ocurrir al montar el componente.
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log('useEffect con [] → componente montado por primera vez');
    setMensaje('Componente listo. Presiona incrementar.');
  }, []);

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
    if (contador > 0) {
      setMensaje(`El contador cambió a: ${contador}`);
    }
  }, [contador]);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.contador}>{contador}</Text>

      {/* Mensaje visible del useEffect con dependencias */}
      <View style={styles.mensajeBox}>
        <Text style={styles.mensajeLabel}>useEffect [contador]:</Text>
        <Text style={styles.mensajeTexto}>{mensaje}</Text>
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => setContador((c) => c + 1)}
      >
        <Text style={styles.botonTexto}>+ Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, styles.botonReset]}
        onPress={() => {
          setContador(0);
          setMensaje('Contador reseteado a 0');
        }}
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
    marginBottom: 20,
  },
  mensajeBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    width: '100%',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
  },
  mensajeLabel: {
    fontSize: 11,
    color: '#999',
    marginBottom: 4,
    fontStyle: 'italic',
  },
  mensajeTexto: {
    fontSize: 14,
    color: '#1565c0',
    fontWeight: 'bold',
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