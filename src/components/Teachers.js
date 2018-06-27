import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { List, ListItem, Icon, Tile, Avatar } from 'react-native-elements';

import teachers from '../json/teachers.json';

// Make a component
class Teachers extends Component {
  state = { teachers: [] };

  static navigationOptions = ({ navigation }) => {
    return {
      title: '師資',
      tabBarLabel: '師資',
      tabBarIcon: ({ tintColor }) => <Icon name="build" size={35} color={tintColor} />,
      drawerLabel: '師資',
      drawerIcon: ({ tintColor }) => <Icon name="build" size={25} color={tintColor} />,
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
    this.setState({ teachers });
  }

  goToPageTwo = (teacher) => {
    this.props.navigation.navigate('Data', { ...teacher });
  };

  render() {
    const {wd, head} = styles;
    return (
      <ScrollView>
        {this.state.teachers.map((teacher) => (
            <View style={head}>
              <Avatar 
                xlarge
                rounded
                source={{uri: teacher.image}}
                onPress={() =>this.goToPageTwo(teacher)}
                activeOpacity={0.7}
              />
              <Text style={wd} onPress={() =>this.goToPageTwo(teacher)}>{teacher.title}</Text>
            </View>
      ))}
      <View style={head}></View>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'row',
    paddingLeft: 30
  },
  wd:{
    alignSelf:'center',
    marginLeft:30,
    fontSize: 20
  }
})

export default Teachers;