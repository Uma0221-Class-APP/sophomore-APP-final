import React, { Component } from 'react';
import { ScrollView,View } from 'react-native';
import { List, ListItem, Icon,Text} from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

import friends from '../json/friends.json';

// Make a component
class Friend extends Component {
  state = { friends: [] };

  static navigationOptions = ({ navigation }) => {
    return {
      title: '朋友',
      tabBarLabel: '朋友',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      drawerLabel: '朋友',
      drawerIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    }
  };

  componentWillMount() {
    this.setState({ friends });
  }

  render() {
    let swipeBtns = [
      {
        text: '刪除',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
     }
    ];
    return (
      
      <ScrollView>
        <List>
          {this.state.friends.map((friends) => (
            <Swipeout right={swipeBtns}
            autoClose='true'
            backgroundColor= 'transparent'>
            <ListItem hideChevron 
              containerStyle = {{padding:10}}
              key={friends.title}
              roundAvatar
              avatar={{ uri: friends.image }}
              title={friends.title}
              titleStyle={{ fontSize:18  }}
              badge={{ value: friends.level, textStyle: { color: 'white' },backgroundColor: '#484848' }}
            />
             </Swipeout>
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Friend;
