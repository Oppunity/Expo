import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native'

export default class RegisterOrganizationPage extends Component {

render()
{

  return(

<View style = {styles.container}> 

   <TouchableOpacity
    onPress = {() => this.props.navigation.navigate('MainFeed')}
    style = {styles.button}> 
               
       <Text style = {styles.buttonText}>
           Continue
        
       </Text>
       
      </TouchableOpacity>
      

</View>

);
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
    alignItems: 'center',
    justifyContent: 'center',
    
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
});
