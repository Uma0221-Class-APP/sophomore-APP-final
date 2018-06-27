import React, { Component } from 'react';
import { View, Picker, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

import { FormLabel, Button, CheckBox } from 'react-native-elements';

import Input from '../components/Input';

// Make a component
class SettingScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {

    return {
      title: '修改',
              // right: (
              //   <image
              //     source={require('../image/設定.png')}
              //     style={{ marginRight: 10, width: 26, height: 26, }}
              //     onPress={() => navigate('SettingScreen')}
              //   />
              // ),
              // left: null,
    };
  }

  state = {
    email: null,
    phone: null,
    username: null,
    city: null,
    gender: 'mail',
    saving: false
  };

  async componentWillMount() {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;
      let city = snapshot.val().city;
      let phone = snapshot.val().phone;
      let gender = snapshot.val().gender;

      this.setState({ username, email, city, phone, gender });
    } catch (err) { }
  }

  onSaveInfo = async () => {
    this.setState({ saving: true });
    const { currentUser } = firebase.auth();
    const { email, phone, username, city, gender } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    await dbUserid.set({ email, phone, username, city, gender });
    this.setState({ saving: false });
    this.props.navigation.navigate('Setting');
  }

  renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <Button
        style={{marginTop: -30}}
        backgroundColor='#484848'
        color='#ffffff'
        borderRadius='5'
        title='儲存'
        onPress={this.onSaveInfo}
      />
    );
  }



  render() {
    console.log(this.state);
    return (
      <View>
      <View>
        <FormLabel>匿名</FormLabel>
        <Input
          autoCorrect={false}
          placeholder='楊太極'
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <FormLabel>信箱</FormLabel>
        <Input
          placeholder='taichi@email.com'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <FormLabel>行動電話</FormLabel>
        <Input
          autoCorrect={false}
          placeholder='098-765-4321'
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <FormLabel>居住地</FormLabel>
        <Input
          autoCorrect={false}
          placeholder='台北市'
          value={this.state.city}
          onChangeText={city => this.setState({ city })}
        />
        </View>
        <Picker
          selectedValue={this.state.gender}
          onValueChange={gender => this.setState({ gender })}
          style={{margin:-21}}
        >
          <Picker.Item label="男性" value="男性" />
          <Picker.Item label="女性" value="女性" />
        </Picker>

        {this.renderButton()}
      </View>
    );
  }
}

// const styles = {
//   formStyle: {
//     position: 'absolute',
//     top: 0
//   }
// };

export default SettingScreen;
