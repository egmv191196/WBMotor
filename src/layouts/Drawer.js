import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import perfil from './perfil'
function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>WBMotor Inicio</Text>
      </View>
    );
  }
  
  function chatGeneral() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat General</Text>
      </View>
    );
  }
  function Marcas() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat Marcas</Text>
      </View>
    );
  }
  function cerrarSesion() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ventana de cierre de sesion</Text>
      </View>
    );
  }

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name="WBMotor" component={Feed} 

      />
      <Drawer.Screen name="Perfil" component={perfil}/>
      <Drawer.Screen name="Chat General" component={chatGeneral} />
      <Drawer.Screen name="Chat Marcas" component={Marcas} />
      <Drawer.Screen name="Cerrar Sesion" component={cerrarSesion} />
    </Drawer.Navigator>
  );
}
export default function App() {
    return (
        <MyDrawer />
    );
  }