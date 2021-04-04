import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image,Button, ImageBackground} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
const App = () => {
  return (
    <View>
        <View style={styles.container}>
          <Image style={{width:100,height:100}} source={require('../imagenes/motor.png')} />
		      <Text style={styles.logoText}>Bienvenido</Text>
        </View > 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems:'center',
      justifyContent: 'flex-end'
    },
    container1: {
        flexGrow: 1,
        alignItems:'flex-start',
        justifyContent: 'flex-end'
      },
    logoText :{
        fontSize :25,
        marginVertical :1,
        color : "#000000"
    },
    boton:{
        margin:15,
    }
});

  export default App;