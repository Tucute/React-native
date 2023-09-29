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

export default function SignupForm({navigation}) {
  const url="https://google.com";
  return (
      <ImageBackground source={require('../assets/images/background2.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{flex: 3}}>
        <Text style={styles.Title}>Sign Up to Shh !</Text>

        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('../assets/images/google.png')} style={styles.logoGG} />
          <Text style={styles.googleText}>Sign up with Google</Text>
        </TouchableOpacity>
        <View style={styles.lineGroup}>
          <View style={styles.line}/>
          <Text>or Login with email</Text>
          <View style={styles.line}/>
        </View>
      </View>
      
      <View style={{flex: 3.5}}>     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your name"
              placeholderTextColor="#003f5c"
              // onChangeText={(email) => setEmail(email)}
            /> 
          </View> 

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter username"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              // onChangeText={(password) => setPassword(password)}
            /> 
        </View>

        <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your email"
              placeholderTextColor="#003f5c"
              // onChangeText={(email) => setEmail(email)}
            /> 
          </View> 

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your password"
              placeholderTextColor="#003f5c"
              // onChangeText={(email) => setEmail(email)}
            /> 
          </View> 

          <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={this.toggleCheckBox}>
            <View style={{ width: 24, height: 24, borderWidth: 1, backgroundColor: 'white' ,borderColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
              {/* {isChecked && <View style={{ width: 12, height: 12, backgroundColor: 'black' }}></View>} */}
            </View>
          </TouchableOpacity>
          <Text style={styles.label}>I agree with the Terms of Service and Privacy policy</Text>
        </View>

      </View>

      <View style={{flex: 2}}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={{color: "white", padding: 20, fontWeight: "bold"}}>Create an account</Text>
          </TouchableOpacity>
          <Text style={styles.textHaveAccount}>Already have an account ?</Text>
          <Text style={styles.textLogin} onPress={()=> navigation.navigate('Login')}>Login</Text>
        </View>
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
    justifyContent: "center",
  },
  Title: {
    marginTop: 40,
    fontSize: 50,
    fontWeight:"700",
    textAlign: "center",
    marginBottom:20,
    color: "#fff",
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 25,
    // width: "auto",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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
  inputView: {
    backgroundColor: "#FFFF",
    borderRadius: 30,
    height: 40,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    width: 380,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    marginTop: 40,
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
  label: {
    margin: 8,
    color: "#ffff",
    fontWeight: "bold",
    // fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    marginLeft: 180,
    flexDirection: "column",
    
  },
  createAccountButton: {
    backgroundColor: "black",
    borderRadius: 50,
    textAlign: "right",  
    marginBottom: 5,
  },
  textHaveAccount: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  textLogin: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
