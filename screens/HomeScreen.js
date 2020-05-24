import React, {useContext} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Login as LoginContext} from '../context/logIn';
import Center from '../utils/Center';

export default function Home(){
  const {logout} = useContext(LoginContext);
  return(
    <Center>
      <Text>
        Home
      </Text>
      <TouchableOpacity onPress={()=>logout()}>
        <View style={styles.logOutButton}>
          <Text style={styles.textStyle}>
            Log Out
          </Text>
        </View>
      </TouchableOpacity>
    </Center>
  )
}
const styles = StyleSheet.create({
  logOutButton: {
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
});

