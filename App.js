import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import * as firebase from 'firebase';
import { LoginStack } from './src/Router';

class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyAhpEih2X26Np9sNvWGLzjlzGZcPiywqOg",
        authDomain: "taichi-1cebb.firebaseapp.com",
        databaseURL: "https://taichi-1cebb.firebaseio.com",
        projectId: "taichi-1cebb",
        storageBucket: "taichi-1cebb.appspot.com",
        messagingSenderId: "177789496452"
    });
  }

  render() {
    return (
      <LoginStack />
    );
  }
}

export default App;