import React, { Component } from 'react';
import { View, ActivityIndicator, ImageBackground} from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormValidationMessage, Button, Text} from 'react-native-elements';
import Input from '../components/Input';

// Make a component
class SignupScreen extends Component {
    state = {
      email: null,
      password: null,
      check: null,
      error: ' ',
      loading: false,
    };

   backLogin = () => {
      this.props.navigation.navigate('LoginScreen');
   };

    onSignUp = async () => {
        const { email, password, check } = this.state;
        this.setState({ error: ' ', loading: true });
        try {
          if (check == password) {
          await firebase.auth().createUserWithEmailAndPassword(email, password);
          this.props.navigation.navigate('LoginScreen');
          }else if (check != password) {
            this.setState({
              email: '',
              password: '',
              check:'',
              error: '密碼錯誤',
              loading: false
            });
          }
        }catch (err) {
          this.setState({
            email: '',
            password: '',
            check:'',
            error: err.message,
            loading: false
          });
        }
      }
  
    renderButton() {
      if (this.state.loading) {
        return <ActivityIndicator size='large' style={{marginTop: 30}} />;
      }
  
      return (
        <Button
          style={{marginTop: 14}}
          title='註冊'
          backgroundColor='#484848'
          color='#ffffff'
          borderRadius='5'
          onPress={this.onSignUp}
        />
      );
    }
  
    render() {
      return (
        <ImageBackground style={styles.imageStyle} source={require('../assets/login2.png')}>
          <View style={styles.formStyle}>
            <FormLabel>帳號</FormLabel>
            <Input
              placeholder='請輸入信箱'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
           <FormLabel>密碼</FormLabel>
            <Input
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='請輸入6碼以上'
              value={this.state.check}
              onChangeText={check => this.setState({ check })}
            />
            <FormLabel>密碼</FormLabel>
            <Input
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='請再次確認密碼'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            {this.renderButton()}
            <FormValidationMessage>{this.state.error}</FormValidationMessage>
          </View>
          <View>
          <Text style={[styles.text, styles.red]} onPress={this.backLogin}>取消註冊</Text>
          </View>
          {/* <View style={styles.formStyle}>
              <Button
                title='Sign up with Facebook'
                backgroundColor='#39579A'
              />
          </View> */}
        </ImageBackground>
      );
    }
  }
  
  const styles = {
    formStyle: {
      marginTop: 185
    },
    imageStyle: {
      flex: 1,
      resizeMode: 'cover'
    },
    red: {
      color: 'red'
    },
    text: {
      marginTop: 15,
      fontsize: 18,
      textAlign: 'center'
    },
  };

// Make a component
// class SignupScreen extends Component {
//   onSignUp = () => {
//     firebase.auth().signUp();

//   }

//   render() {
//     return (
//       <View style={styles.formStyle}>
//         <Button
//           title='Sign up'
//           backgroundColor='#F8671D'
//           onPress={this.onSignUp}
//         />
//       </View>
//     );
//   }
// }

// const styles = {
//   formStyle: {
//     marginTop: 250
//   }
// };

export default SignupScreen;
