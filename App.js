import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./assets/components/LoginScreen";
import SignUp from './assets/components/SignUp';
import Home from './assets/components/Home';
import Header from './assets/components/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <h1 className="md-y-6">Rent-it</h1>
      <Home />
      
      <item />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
