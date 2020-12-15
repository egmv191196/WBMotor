import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import DataPicker from 'react-native-datepicker';
export default class FormRegistro extends Component<{}>{
	render(){
		return(
		<View style={styles.container}>
        <Text style={styles.logoText}>Registro</Text>
        <Text>Nombre</Text>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Nombre"
          placeholderTextColor="#4A1616"
        /> 
        <Text>correo electronico</Text>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="E-mail"
          placeholderTextColor="#4A1616"
          keyboardType="email-address"
          onSubmitEditing={()=>this.password.focus()}/>
        <Text>Contraseña</Text>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#4A1616"
          ref={(input)=>this.password =input} />
        <Text>Fecha de Nacimiento</Text>
        <DataPicker
             format="DD/MM/YYYY"
             style={styles.dataComponente}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registar </Text>
        </TouchableOpacity>
		</View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  inputBox : {
    width:250,
    backgroundColor:'rgba(0, 255, 255,0.2)',
    borderRadius :25,
    paddingHorizontal :15,
    fontSize:20,
    color:"#4A1616",
    marginVertical: 10

  },
  button:{
    width:250,
    backgroundColor:'rgba(0, 255, 255,0.6)',
    borderRadius :25,
    marginVertical: 15,
    paddingVertical: 10
  },
  buttonText: {
    fontSize:20,
    fontWeight:'500',
    color :"#4A1616",
    textAlign:'center'
  },
  logoText :{
  	fontSize :25,
  	marginVertical :10,
  	color : "#000000"
  },
  dataComponente :{
    width:250,
    backgroundColor:'rgba(0, 255, 255,0.2)'
  }
});