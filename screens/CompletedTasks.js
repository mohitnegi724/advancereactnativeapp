import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Center from '../utils/Center';

export default function CompletedTasks(){
  return(
    <Center>
      <Text>
       CompletedTasks
      </Text>
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

