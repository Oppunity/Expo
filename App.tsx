import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
// import SignUp from './src/screens/Signup';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator ( { 
  Home: HomeScreen,
 // SignUpPage: SignUp,
},
{
  initialRoute: 'Home',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
}
}
)

const AppContainer = createAppContainer(navigator)

class App extends Component {
  render() {
      return (
          <AppContainer theme="dark" />
      )
  };
}

export default App; 