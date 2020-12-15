import React from 'react';
import { StatusBar } from 'react-native'
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './components/Logo';
import Form from './components/Form';
export default function App({ navigation }) {
  return (
    <View style={styles.container}>
        <Logo/>
        <Form/>
        <View style={styles.registar}>
          <Text style={styles.registarText}>¿No tiene una cuenta? </Text>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('registro')}>
            <Text style={styles.botonregistro}>Cree una</Text>
          </TouchableOpacity>
        </View>
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
