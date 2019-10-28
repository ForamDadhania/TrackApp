import React, { useContext, useEffect }from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';
import  { Context } from '../context/AuthContext';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage} = useContext(Context);

  
    return (
        <View style = {styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText = "Sign in to your account"
                errorMessage = {state.errorMessage}
                onSubmit = {signin}
                submitButtonText = "Signin"
            />
            <NavLink text = "Don't have an account? Sign up" 
                     routeName = "Signup"/>
        </View>
    )
}

SigninScreen.navigationOptions = {
    header: null
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
});


export default SigninScreen;