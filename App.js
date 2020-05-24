import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { LoginProvider} from './context/logIn';
import Route from './route'


export default function App(props) {
  return (
    <SafeAreaView style={styles.container}>
      <LoginProvider>
        <Route />
      </LoginProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
