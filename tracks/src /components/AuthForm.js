import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
   const [email, setEmail]  = useState('');
   const [password, setPassword] = useState('');

   return (
       <>
    <Spacer>
    <Text h4>
       {headerText}
    </Text>
    </Spacer>
    
    <Input label="Email" 
            value={email}
            // onChangeText={(newEmail) => setEmail(newEmail)}  could be written as below
            onChangeText={setEmail}  
            autoCapitalize="none"
            autoCorrect={false}
    />
    <Spacer />
    
    <Input  secureTextEntry
            label="Password" 
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
    
    />
    {errorMessage?  <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
   
    <Spacer>
    <Button title = {submitButtonText}
            onPress = {() => onSubmit({email, password})

            }
        />
    </Spacer>
    </>
   );
};

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15
    }
});

export default AuthForm;