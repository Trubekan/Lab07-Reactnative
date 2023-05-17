import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { database } from '../database/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const saveNewUser = async () => {
    if (state.name === '') {
      alert('Por favor, ingresa un nombre');
    } else {
      await addDoc(collection(database, 'usuarios'), state);
      props.navigation.navigate('UserList');
    }
  };

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleViewUsers = () => {
    props.navigation.navigate('UserList');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          onChangeText={(value) => handleChangeText('name', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Email del usuario"
          onChangeText={(value) => handleChangeText('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Celular del usuario"
          onChangeText={(value) => handleChangeText('phone', value)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Guardar" onPress={saveNewUser} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ver Usuarios" onPress={handleViewUsers} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    opacity: 0.9,
    backgroundImage: 'url("https://i.ibb.co/wSXNQZn/casa.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  inputGroup: {
    marginBottom: 15,
    width: '50%',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  buttonContainer: {
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: 'black'
  }
});

export default CreateUserScreen;
