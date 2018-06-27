import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import * as firebase from 'firebase';
import { Tile, List, ListItem, Button, Icon, Text } from 'react-native-elements';
// import me from '../json/me.json';

// Make a component
class UserScreen extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: '個人資料',
              right: (
                <image
                  source={require('../image/設定.png')}
                  style={{ marginRight: 10, width: 26, height: 26, }}
                  onPress={() => navigate('SettingScreen')}
                />
              ),
              left: null,
    };
  }

  state = {
    email: null,
    username: null,
    city: null,
    phone: null,
    gender: null
  };

  async componentDidMount() {
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

  onSignOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    const { email, phone, username, city, gender } = this.state;
    return (
      <ScrollView>
        <List>
          <ListItem
            title="信箱"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="行動電話"
            rightTitle={phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="匿名"
            rightTitle={username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="性別"
            rightTitle={gender}
            hideChevron
          />
          <ListItem
            title="居住地"
            rightTitle={city}
            hideChevron
          />
        </List>
        <Button
          style={{marginTop: 16}}
          flex= '1'
          title='修改'
          backgroundColor='#484848'
          color='#ffffff'
          borderRadius='5'
          onPress={() =>this.props.navigation.navigate('SettingScreen')}
        />
        <Text style={styles.text}onPress={this.onSignOut}>登出</Text>
      </ScrollView>
    );
  }
}

const styles = {
  text: {
     color: 'red',
     textAlign: 'center',
     marginTop: 70,
  }
}

export default UserScreen;