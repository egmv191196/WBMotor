import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
export default class Loading extends React.Component {
  componentDidMount() {
    auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'draw' : 'login')//Aqui verifica si hay o no alguna cuenta autenticada
      //Si es verdadero entra a Draw y si es falso a login
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})