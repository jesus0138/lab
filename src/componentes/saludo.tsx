import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function Saludo() {
  const [nombre, setNombre] = useState('');

  const saludar = () => {
    Alert.alert('Hola, ' + nombre);
  };

  return (
    <View style={styles.container}>
      <Text>Saludo</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, padding: 8 }}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Button title="Presioname" onPress={saludar} />
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