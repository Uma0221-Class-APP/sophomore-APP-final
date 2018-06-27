import React, { Component } from 'react';
import { View, ActivityIndicator, ImageBackground, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormValidationMessage, Button, Text, Card } from 'react-native-elements';
import Input from '../components/Input';
import { Facebook } from 'expo';

// Make a component
class LoginScreen extends Component {
  state = {
    email: null,
    password: null,
    error: ' ',
    loading: false,
    token: null,
  };




  facebookLogin = async () => {
    console.log('Testing token....');
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      console.log('Already having a token...');
      this.setState({ token });

      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      this.setState({ status: `Hello ${(await response.json()).name}` });
      console.log(response);
      this.props.navigation.navigate('TabRouter');
    } else {
      console.log('DO NOT having a token...');
      this.doFacebookLogin();
    }
  };

  doFacebookLogin = async () => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '663514537323042',
      {
        permissions: ['public_profile'],
        behavior: 'web'
      });

    if (type === 'cancel') {
      console.log('Login Fail!!');
      return;
    }

    await AsyncStorage.setItem('fb_token', token);
    this.setState({ token });
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    this.setState({ status: `Hello ${(await response.json()).name}` });
    console.log(response);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      console.log(`currentUser = ${currentUser.uid}`);
      this.props.navigation.navigate('UserStack');
    } catch (err) {

    }
  };





  onSignIn = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({loading: false });
      this.props.navigation.navigate('TabRouter');
    } catch (err1) {
        this.setState({ error: err1.message, loading: false });
    }
  }

  onSignUp = async () => {
    this.props.navigation.navigate('SignupStack');
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{marginTop: 30}} />;
    }

    return (
      <Button
        style={{marginTop: 16}}
        title='登入'
        backgroundColor='#484848'
        color='#ffffff'
        borderRadius='5'
        onPress={this.onSignIn}
      />
    );
  }

  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <ImageBackground style={styles.imageStyle} source={require('../assets/login2.png')}>
        <View style={styles.formStyle}>
          <FormLabel>帳號</FormLabel>
          <View>
          <Input
            placeholder='請輸入信箱'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          </View>
          <FormLabel>密碼</FormLabel>
          <Input
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='請輸入密碼'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          {this.renderButton()}
          <Button
            style={{marginTop: 13}}
            borderRadius='5'
            title='Facebook'
            backgroundColor='#39579A'
            onPress={this.facebookLogin}
          />
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
          <View style={styles.container}>
          <Text style={styles.text}>還沒有自己的帳戶？</Text>
          <Text style={[styles.text, styles.red]} onPress={this.onSignUp}>馬上註冊</Text>
          </View>
        </View>
        <View style={styles.formStyle}>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  formStyle: {
    marginTop: 185
  },
  red: {
    color: 'red'
  },
  text: {
    marginTop: 20,
    marginLeft: 37,
    fontsize: 18,
    textAlign: 'center'
  },
  container: {
    flexDirection: 'row',
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover'
  },
};

export default LoginScreen;
