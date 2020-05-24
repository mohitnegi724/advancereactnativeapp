import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Center from '../utils/Center';

export default function RegisterScreen({navigation}){
  return(
    <Center>
      <Text>
        Register Here!
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text>
          LogIn
        </Text>
      </TouchableOpacity>
    </Center>
  )
}