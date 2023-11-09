import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import React from 'react';
//import { useNavigation } from '@react-navigation/native';

export function ScreenProfileType(){
  {/*
 const navigation = useNavigation();

  function ScreenSignInTeacher() {
    navigation.navigate('ScreenSignInTeacher')
  }

  function ScreenSignInAdm() {
    navigation.navigate('ScreenSignInAdm')
  }

  function ScreenLogin() {
    navigation.navigate('ScreenLogin')

  }

  function ScreenSignInStudent() {
    navigation.navigate('ScreenSignInStudent')
  }
*/}

return(
  <View>
    <TouchableOpacity style={styles.botao}>
    <Text>oi</Text>
    </TouchableOpacity>
  </View>
)
}

const styles = StyleSheet.create({
  botao:{
    backgroundColor:'red'
  }
})

export default ScreenProfileType;