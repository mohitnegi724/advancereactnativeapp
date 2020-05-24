import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Login as LoginContext} from '../context/logIn';
import Login from '../screens/LoginScreen'
import Register from '../screens/RegisterScreen'
import Home from '../route/HomeRoutes'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function Route() {
  const {user} = useContext(LoginContext);
  return (
    <NavigationContainer>
      {user.username? <Home />:
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
