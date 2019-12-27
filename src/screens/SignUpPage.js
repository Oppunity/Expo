import React from 'react';
import { StyleSheet,Picker, Text, View, TextInput, Button, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'


export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props); 
  

this.state =   {
                messageModalVisible: false
                }

                     }

        toggleMessageModal = (visible) => {
            this.setState({messageModalVisible: visible});
        }

organizationNavigate(){
     this.props.navigation.navigate('Organization')
// do something
}

studentNavigate(){
     this.props.navigation.navigate('Student')
// do something
}

exitModal(){
     this.toggleMessageModal(!this.state.messageModalVisible)
// do something
}

organizationNavigateAndExit() {
    this.organizationNavigate(),
    this.exitModal();
}

studentNavigateAndExit() {
    this.studentNavigate(),
    this.exitModal();
}

render() {
  return(
    <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
     >

    <View> 
    
  <Image 
         style = {{width: 250, height: 250}}
         source = {{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/University_of_San_Diego_seal.svg/1200px-University_of_San_Diego_seal.svg.png'}}
      />
      
 
    </View>
      
      

        <TextInput style = {styles.inputBox}
        placeholder = "Email" 
        placeholderTextColor = "#ffffff"
       />


       <TextInput style ={styles.inputBox}
        placeholder = "Password"
        placeholderTextColor = "#ffffff"
        secureTextEntry={true} />

        
        
      <TouchableOpacity 
    onPress = {() => this.toggleMessageModal(true)}
            style = {styles.button}> 
               
       <Text style = {styles.buttonText}>
            Register
        
       </Text>
       
      </TouchableOpacity>
      


      <Modal
             isVisible = {this.state.messageModalVisible }
             onSwipeComplete = {() => this.toggleMessageModal(false)}
             swipeDirection = "right"
             onBackDropPress = {() => this.toggleMessageModal(false)}
             animationIn = "fadeIn"
             animationOut = "fadeOut"
             style = {styles.modalMessages}
             >

                <View style = {styles.modalMessageContent}>
                    
                    <TouchableOpacity 
                    style = {styles.button}
                    onPress ={ () => this.organizationNavigateAndExit() }>

                            <Text style = {styles.buttonText} > Register as Organization</Text>
            
                    </TouchableOpacity>
            


                    <TouchableOpacity 
                    style = {styles.button}
                     onPress ={ () => this.studentNavigateAndExit() }>

                            <Text style = {styles.buttonText}> Register as Student</Text>
            
                    </TouchableOpacity>

                </View>
            
        </Modal>


    </KeyboardAvoidingView>
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
    color: '#f8f8ff',
   
    
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
},

modalMessageContent:
{
    backgroundColor: 'black',
    height: 800,
    justifyContent: 'center',
    alignItems: 'center'
}

  

});
