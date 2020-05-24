import React from 'react';
import {StyleSheet, View, text} from 'react-native';

export default function Center({children}){
  return(
    <View style={Styles.container}>
      {children}
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})