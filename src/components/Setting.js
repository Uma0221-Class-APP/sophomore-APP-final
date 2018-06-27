import React, { Component } from 'react';
import { ScrollView,View,Text,Switch } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';


// Make a component
class Albums extends Component {
  state = { albums: [] };

  static navigationOptions = ({ navigation }) => {
    return {
      title: '設定',
      tabBarLabel: '設定',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      drawerLabel: '設定',
      drawerIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    }
  };


  render() {
    return (
      <View>
        <List>
            <ListItem
              key={"個人資料"}
              title={"個人資料"}
              onPress={() => this.props.navigation.navigate('UserScreen')}
            />      
            <ListItem
            key={"管理帳號"}
            title={"管理帳號"}
          />
          <ListItem
            switchButton
            hideChevron
            title="通知"
            onSwitch={() => this.setState({})}
          />
          <ListItem
            switchButton
            hideChevron
            title="同步"
            onSwitch={() => this.setState({})}
          />
          <ListItem
            key={"權限"}
            title={"權限"}
          />
          <ListItem
            key={"語言"}
            title={"語言"}
          />
          <ListItem
            key={"幫助"}
            title={"幫助"}
          />
          <ListItem
            key={"關於"}
            title={"關於"}
          />
        </List>
      </View>
    );
  }
}

export default Albums;
