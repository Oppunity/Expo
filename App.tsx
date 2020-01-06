import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Navigator } from 'react-native'; 


import EventClickPage from './src/screens/EventClickPage';
import HomeScreenPage from './src/screens/HomeScreenPage';
import InterestPage from './src/screens/InterestPage';
import LoginPage from './src/screens/LoginPage';
import MainFeedPage from './src/screens/MainFeedPage';
import MediaClickPage from './src/screens/MediaClickPage';
import OrgProfilePage from './src/screens/OrgProfilePage';
import OrgRecommendationPage from './src/screens/OrgRecommendationPage';
import PopnSearchPage from './src/screens/PopnSearchPage';
import Post from './src/components/presentation/Post';
import SettingsPage from './src/screens/SettingsPage';
import SignUpPage from './src/screens/SignUpPage';
import UploadPage from './src/screens/UploadPage';
import UserProfilePage from './src/screens/UserProfilePage';
import RegisterOrganizationPage from './src/screens/RegisterOrganizationPage';
import RegisterStudentPage from './src/screens/RegisterStudentPage';


const RootStack = createStackNavigator (
  
  { 
  
  HomeScreen: HomeScreenPage,
  EventClick: EventClickPage,
  Login: LoginPage,
  MainFeed: MainFeedPage,
  MediaClick: MediaClickPage,
  OrgProfile: OrgProfilePage,
  OrgRecommendation: OrgRecommendationPage,
  Interest: InterestPage,
  PopnSearch: PopnSearchPage,
  Settings: SettingsPage,
  SignUp: SignUpPage,
  Upload: UploadPage,
  UserProfile: UserProfilePage,
  Student: RegisterStudentPage,
  Organization: RegisterOrganizationPage,

},
{
  initialRoute: 'HomeScreen',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
}
}
)

const AppContainer = createAppContainer(RootStack)

class App extends Component {
  render() {
      return (
          <AppContainer/>
      )
  };
}

export default App; 