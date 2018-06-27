import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import { Button, Card, Text, List, Tile, ListItem, Icon, Image } from 'react-native-elements';

import video from '../json/video.json';
// Make a component
class Contact extends Component {
  state = { video: [] };
  static navigationOptions = ({ navigation }) => {
    return {
      title: '影片',
      tabBarLabel: '影片',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      //drawerLabel: '影片',
     // drawerIcon: ({ tintColor }) => <Icon name="list" size={25} color={tintColor} />,
    //   headerLeft: (
    //     <Icon
    //       name='menu'
    //       iconStyle={{ marginLeft: 10 }}
    //       onPress={() => navigation.navigate('DrawerOpen')}
    //     />
    //   ),
    };
  }

  componentWillMount() {
    this.setState({ video });
  }

  render() {
    return (
      <ScrollView>
       {this.state.video.map((video) => (
             <Card
             image={{ uri: video.image }}>
           <Button
           raised
           backgroundColor='#AAAAAA'
           buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
           icon={{name: 'videocam'}}
           title={video.title}
           onPress={() => Linking.openURL(video.url)} 
           />
           </Card>
          ))}
      </ScrollView>
    );
  };
}

export default Contact;