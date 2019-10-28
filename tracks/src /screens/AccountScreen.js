 import React, {useContext} from 'react';
 import { Text, StyleSheet } from 'react-native';
 import {Button} from 'react-native-elements';
 import Spacer from '../components/Spacer';
 import {Context as AuthContext} from '../context/AuthContext';
 import { SafeAreaView } from 'react-navigation';
 import { MaterialCommunityIcons } from '@expo/vector-icons';

 const AccountScreen = () => {
     const { signout } = useContext(AuthContext);
     return (
         <SafeAreaView forceInset={{ top: 'always' }}>
             <Text>
                 Account Screen is showing
             </Text>
             <Spacer>
             <Button title="sign out"
                     onPress={signout}
             />
             </Spacer>
         </SafeAreaView>
     )
 }
 

 AccountScreen.navigationOptions= {
     title: 'Sign out',
     tabBarIcon: <MaterialCommunityIcons name = 'settings' size={20}/>
 }

 const styles = StyleSheet.create({

 });


 export default AccountScreen;