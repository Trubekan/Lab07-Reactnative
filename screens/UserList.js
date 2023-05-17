import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { database } from '../database/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Usuarios from './Usuarios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, 'usuarios');
    const q = query(collectionRef, orderBy('name', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          phone: doc.data().phone,
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuarios</Text>
      {users.map((usuario) => (
        <View key={usuario.id} style={styles.userContainer}>
          <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png' }}
        style={styles.image}
      />
          <Usuarios {...usuario} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundImage: 'url("https://www.donwordpress.com/blog/wp-content/uploads/2019/07/usuarios-wordpress-1024x475.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center'
  },
  userContainer: {
    marginLeft: 500,
    backgroundColor: 'white',
    fontSize: 20,
    width: '20%',
    display: 'block',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default UserList;
