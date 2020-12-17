import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}>{
	render(){
		return(
			<View style={styles.container}>
			    <Image style={{width:100,height:100}}
			        source={require('../imagenes/motor.jpg')} />
			    <Text style={styles.logoText}>Bienvenido</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems:'center',
    justifyContent: 'flex-end'
  },
  logoText :{
  	fontSize :25,
  	marginVertical :1,
  	color : "#000000"
  }
});