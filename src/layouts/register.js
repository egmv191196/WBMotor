
import React from 'react';
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View, Button } from 'react-native';
import Logo from '../components/Logo';
import FormRegistro from '../components/FormRegistro';
export default function App() {
  return (
    <View style={styles.container}>
        <Logo/>
        <FormRegistro/>
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
    alignItems:'flex-end',
    justifyContent:'center' ,
    paddingVertical:15,
    flexDirection:'row'
  },
  registarText :{
    color :"#4A1616",
    fontSize:20
  },
  botonregistro: {
    color :"#6E0B0B",
    fontSize:20,
    fontWeight:'600'
  }
});
