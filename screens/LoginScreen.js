import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import { Login as LoginContext} from '../context/logIn';
import Center from '../utils/Center';

export default function LoginScreen({navigation}){
  const {login} = useContext(LoginContext);
  return(
    <Center>
      <TouchableOpacity onPress={()=>login()}>
        <View style={Styles.logInButton}>
          <Text style={Styles.textStyle}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text>
          Don't Have a Account?
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text>
            Register Here!
          </Text>
        </TouchableOpacity>
      </View>
    </Center>
  )
}

const Styles = StyleSheet.create({
  logInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'black'
  },
  textStyle: {
    color: 'white',
    fontSize: 12,
  }
})