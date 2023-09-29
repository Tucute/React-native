import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import {
  ImageBackground, 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function LoginForm({navigation}) {
  const url="https://google.com";
  const image = {uri: './assets/images/13pro3.png'};
  return (
      <ImageBackground source={require('../assets/images/13pro3.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{flex: 3}}>
        <Text style={styles.Title}>Login to Shh !</Text>

        <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../assets/images/google.png')} style={styles.logoGG} />
          <Text style={styles.googleText}>Login with Google</Text>
        </TouchableOpacity>
        <View style={styles.lineGroup}>
          <View style={styles.line}/>
          <Text style={{fontWeight: "bold"}}>or Login with email</Text>
          <View style={styles.line}/>
        </View>
      </View>
      
      <View style={{flex: 4}}>     
          <Text style={styles.textLabel}>Username or Email</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              // onChangeText={(email) => setEmail(email)}
            /> 
          </View> 

          <Text style={styles.textLabel}>Password</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              // onChangeText={(password) => setPassword(password)}
            /> 
        </View>
          <Text style={styles.hyperlink}>
            Forgot password ?
          </Text>
          <Button title="Login" style={styles.loginBtn}> Login
          </Button>
      </View>

      <View style={styles.signup}>
        <Text style={styles.dont}>Don't have an account !</Text>
        <Text  onPress={()=>navigation.navigate('SignUp')} style={styles.signupText}>Signup</Text>
      </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
  },
  Title: {
    marginTop: 40,
    fontSize: 54,
    fontWeight:"700",
    textAlign: "center",
    marginBottom:20,
    color: "#fff",
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  logoGG: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  googleText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: "center",
  },

  lineGroup: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "center",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "30%",
  },

  hyperlink: {
    color: "blue",
    marginBottom: 20,
  },
  textLabel: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  inputView: {
    backgroundColor: "#ffff",
    borderRadius: 30,
    height: 50,
    marginBottom: 10,
  },
  TextInput: {
    height: 50,
    width: 370,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    marginTop: 20,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
  },
  dont: {
    color: "#fff",
    fontWeight: "700",
  },
  signup: {
    flex: 2,
    flexDirection: "column",
    marginLeft: -160,
  },
  signupText: {
    fontWeight: "bold",
    textAlign: "center",
  }
});
