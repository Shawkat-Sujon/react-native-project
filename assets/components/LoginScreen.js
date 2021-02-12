import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'


export default class SignUp extends React.Component {
  state = {
    email: '', password: '', 
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { email, password} = this.state
    try {
      // here place your signup logic
      console.log('user successfully logged In: ', success)
    } catch (err) {
      console.log('error Logging in: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        
        <Button 
          title ='LogIn'
          onPress={this.logIn}
          
        />
        

    
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 450,
    height: 70,
    backgroundColor: 'black',
    margin: 10,
    padding: 15,
    color: 'white',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    
    justifyContent: 'center',
    alignItems: 'center'
  }
})