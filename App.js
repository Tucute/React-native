import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginForm from './component/loginForm';
// import SignupForm from './component/signupForm';
import Play from './FlashCard/Play';
import Setting from './FlashCard/Setting';
const Stack = createNativeStackNavigator();

export default function App(){
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login'>
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginForm}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="SignUp"
    //       component={SignupForm}
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Play'>
        <Stack.Screen
          name="Play"
          component={Play}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

