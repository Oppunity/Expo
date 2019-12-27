import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, KeyboardAvoidingView,TouchableOpacity } from 'react-native';


export default function LoginPage() {
  return (

    <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
     >

      <Image style = {styles.backButton}
       source = {{uri: 'https://icon-library.net/images/ios-back-icon/ios-back-icon-13.jpg'}}
      />

      <Image 
         style = {{width: 250, height: 250}}
         source = {{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/University_of_San_Diego_seal.svg/1200px-University_of_San_Diego_seal.svg.png'}}
      />
      
      
      <TextInput style = {styles.inputBox}
        placeholder = "Email" 
        placeholderTextColor = "#ffffff"
       />

       <TextInput style ={styles.inputBox}
        placeholder = "Password"
        placeholderTextColor = "#ffffff"
        secureTextEntry={true} />

        
        
      <TouchableOpacity style = {styles.button}>

       <Text style = {styles.buttonText}>Login</Text>

      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.button}>

        <Text style = {styles.buttonText}>Signup</Text>

      </TouchableOpacity>
      


      <TouchableOpacity>

        <Text style = {styles.forgotMyPassword}>Forgot my Password</Text>

      </TouchableOpacity>
      

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

titleText: {
  fontSize:30,
  color: "white"
},

  inputBox: {
    width:300,
    height: 60,
    fontSize: 15,
    backgroundColor: '#a9a9a9',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 20,
    color: '#f8f8ff'
    
  },

  button:{
    width:300,
    height: 60,
    backgroundColor: '#0043cf',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16
    
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

  forgotMyPassword: {
  fontSize: 14,
  color: 'white',
},

backButon: {
  width:60,
  height: 60,
  position: 'absolute',
  left: 0,
  top: 0
}

  

});
