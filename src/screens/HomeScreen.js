import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'



const HomeScreen = () => {
    

    return (
        <View style={styles.LoginText}>
            
        <TouchableOpacity
           style={styles.SubmitButtonStyle}
           activeOpacity = { .5 }
           onPress={() => this.props.navigation.navigate() }
        >
  
             <Text style={styles.TextStyle}> LOGIN </Text>
             
       </TouchableOpacity>
  
          </View>
  );
}

HomeScreen.navigationOptions = ({ /*navigation*/ }) => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
},
myButton:{
  padding: 5,
  height: 200,
  width: 200,  //The Width must be the same as the height
  borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
  backgroundColor:'rgb(195, 125, 198)',
},
SubmitButtonStyle: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#2E36FF',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
},

LoginText: {
    flex: 1,
    justifyContent: 'center',
},

}
);


export default HomeScreen;