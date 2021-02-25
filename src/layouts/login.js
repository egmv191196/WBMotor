import React from 'react';
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Logo';
import draw from './Drawer';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { LoginButton, AccessToken,LoginManager } from 'react-native-fbsdk';
import { GoogleSignin,GoogleSigninButton} from '@react-native-community/google-signin';

export default function App({ navigation }) {
  GoogleSignin.configure({
    webClientId: '971209811374-i87lb1sr3gss0v53ge2r5bj91j6ah0b4.apps.googleusercontent.com',
  });
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
  //Funcion para inicar Sesion con Facebook-------
  function FacebookSignIn() {
    return (
      <Button
        title="Facebook Sign-In"
        onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
      />
    );
  }
  //PArte 2
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  //------- END Facebook-----------------
//-------Gogogle
async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
//google
  return (
    <View style={styles.container}>
        <Logo/>

        <View style={styles.registar}>
          <Text style={styles.registarText}>¿No tiene una cuenta?  </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Crear una cuenta')}>
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

        <GoogleSigninButton
          style={{ width: 250, height: 50 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
        </GoogleSigninButton>
        <LoginButton></LoginButton>
        <TouchableOpacity style={styles.button3} onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}>
         
          <Text style={{fontFamily: 'Arial', fontSize: 15,textAlign:'center'}}>Iniciar con Facebook</Text>
         
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
  button2:{
    width:250,
    borderRadius :25,
    backgroundColor:'#db4a39',
    marginVertical: 5,
    paddingVertical: 5
  },
  button3:{
    width:250,
    backgroundColor:'#3b5998',
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