import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
cerrarSesion = () => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }
const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imagen}>
        <Image style={styles.perfil} source={require('../imagenes/foto.png')}
      />
        </View>
        <View style={styles.texto} >
                <View style={styles.texto1}>
                    <Text style={styles.baseText}>
                        <Text>Nombre: </Text>
                        {"\n\n\n\n"}
                        <Text>Correo</Text>
                        {"\n\n\n"}
                        <Text>Contraseña</Text>
                        {"\n\n\n"}
                        <Text>Fecha de nacimiento</Text>
                    </Text>
                </View>
                <View style={styles.texto2}>
                    <Text style={styles.baseText}>
                        <Text>Rodrigo Hernandez del sol</Text>
                        {"\n\n\n"}
                        <Text>Prueba@gmail.com</Text>
                        {"\n\n\n"}
                        <Text>*******</Text>
                        {"\n\n\n"}
                        <Text>12/11/1995</Text>
                    </Text>
                </View>
	    </View>
        <View style={styles.boton} >
            <Button title="Cerrar sesion"
                onPress={this.cerrarSesion.bind(this)}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex:1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    imagen:{
        margin:30,
        flex:1.5,
    },
    texto:{
        padding:5,
        borderWidth:1,
        borderRadius:20,
        flexDirection: 'row',
        flex:6,
    },
    perfil:{
        borderWidth:1,
        borderRadius: 25,
        height:100,
        width:100,
        resizeMode: 'cover',
    },
    baseText:{
        fontSize: 15,
    },
    texto1:{
        flex:1,
    },
    texto2:{
        flex:1,
    },
    boton:{
        paddingBottom:5,
        margin:5,
        flex:1
    },
});

export default App;