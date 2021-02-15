import React from 'react';
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Logo';
import draw from './Drawer';
import { useState } from 'react';
export default function App({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  
  //Funcion para el login
  //si funciona con .createUserWithEmailAndPassword crea un usuario e inicia sesion
  handleLogin = () => {
    auth()
    .signInWithEmailAndPassword(email, pass)
    .then(() => {
      console.log('Usuario inicio sesion',email,pass);
    })
    .catch(error => {//Este catch se utiliza cuando se utiliza la funciona create
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      } 
      console.error(error,email,pass);
    });
  }

  return (
    <View style={styles.container}>
        <Logo/>
        <Text style={styles.inicio}>Iniciar Sesión</Text>

        <View style={styles.registar}>
          <Text style={styles.registarText}>¿Eres un nuevo usuario? </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('registro')}>
            <Text style={styles.botonregistro}>Crear una cuenta</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="E-mail"
          placeholderTextColor="#4A1616"
          keyboardType="email-address"
          onChangeText={(email) => setEmail(email)}
        /> 
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#4A1616"
          onChangeText={(pass) => setPass(pass)}
        />

        <TouchableOpacity style={styles.button1} onPress={this.handleLogin.bind(this)} >
          <Text style={styles.buttonText1}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <Text style={styles.ooo}>o</Text>
        <TouchableOpacity style={styles.button1} onPress={this.handleLogin.bind(this)} >
          <Text style={styles.buttonText1}>Continuar con google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={this.handleLogin.bind(this)} >
          <Text style={styles.buttonText1}>Continuar con facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={this.handleLogin.bind(this)} >
          <Text style={styles.buttonText1}>Continuar con Apple</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#808080",
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  registar:{
    flexGrow: 1,
    justifyContent:'center' ,
    flexDirection:'row',
     marginVertical: 3
  },
  inicio:{
    fontSize:25,
  },
  registarText :{
    color :"#4A1616",
    fontSize:10
  },
  botonregistro: {
    color :"#6E0B0B",
    fontSize:10,
    fontWeight:'600'
  },
  button1:{
    width:250,
    backgroundColor:'rgba(0, 255, 255,0.6)',
    borderRadius :25,
    marginVertical: 5,
    paddingVertical: 5
  },
  buttonText1: {
    fontSize:20,
    fontWeight:'500',
    color :"#4A1616",
    textAlign:'center'
  },
  inputBox : {
    width:250,
    backgroundColor:'rgba(0, 255, 255,0.2)',
    borderRadius :25,
    paddingHorizontal :5,
    fontSize:20,
    color:"#4A1616",
    marginVertical: 5
  },
  ooo:{
    fontSize:20,
    textAlign:'center'
  },
});