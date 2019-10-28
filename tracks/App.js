import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation' ;

import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import AccountScreen from './src /screens/AccountScreen';
import SignupScreen from './src /screens/SignupScreen';
import SigninScreen from './src /screens/SigninScreen';
import TrackCreateScreen from './src /screens/TrackCreateScreen';
import TrackDetailScreen from './src /screens/TrackDetailScreen';
import TrackListScreen from './src /screens/TrackListScreen';
import {Provider as AuthProvider} from './src /context/AuthContext';
import {setNavigator} from './src /navigationRef';
import ResolvedAuthScreen from './src /screens/ResolvedAuthScreen';
import {Provider as LocationProvider} from './src /context/LocationContext';
import {Provider as TrackProvider} from './src /context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: 'Track',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
}

const switchNavigator = createSwitchNavigator({
  ResolvedAuth: ResolvedAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }), 
  mainFlow: createBottomTabNavigator({
    trackListFlow,
      TrackCreate: TrackCreateScreen,
      Accout: AccountScreen
  })
});


const App =  createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App 
            ref={(navigator) => { 
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}








