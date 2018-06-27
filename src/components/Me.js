import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Tile, List, ListItem, Icon, Button, Divider, Avatar } from 'react-native-elements';

import me from '../json/me.json'; 
/*以上有改*/

class Me extends Component {
  state = { me: [] };

  static navigationOptions = ({ navigation }) => {
    return {
      title: '個人',
      tabBarLabel: '個人',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
      drawerLabel: '個人',
      drawerIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    };
  }
  componentWillMount() {
    this.setState({ me });
  }

  goToPageTwo = (me) => {
    this.props.navigation.navigate('Friend', { ...me });
  };

  render() {
    return (
      <View  style={styles.container}>
        <ImageBackground
                style={{width: '100%', height: 160, paddingTop:'15%', alignItems:'center', marginBottom: '25%',}}
                source={require('../assets/水墨.jpg')}
            >
        <Avatar
         xlarge
         rounded
         source={{uri:"https://i.imgur.com/xz6RBpn.jpg"}}
         onPress={() => console.log("Works!")}
         activeOpacity={0.7}
        />
        <Text style={{fontSize: 24, marginTop: 5}}>潘佑萱</Text>
        </ImageBackground>
        <View style={styles.center}>
          <View style={styles.float}>
            <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <Image
                 style={styles.img}
                 source={require("../image/fire.png")}/>
              <Text style={{textAlign:'center',marginTop:'5%'}}>挑戰</Text>
            </TouchableOpacity>
            
            <View style={styles.line}></View>
            
            <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <Image
                 style={styles.img}
                 source={require("../image/頭銜.png")}/>
              <Text style={{textAlign:'center',marginTop:'5%'}}>頭銜</Text>
            </TouchableOpacity>
           
            <View style={styles.line}></View>
           
            <TouchableOpacity style={styles.button} onPress={() => this.goToPageTwo(me)}>
              <Image
                 style={styles.img}
                 source={require("../image/朋友.png")}/>
              <Text style={{textAlign:'center',marginTop:'5%'}}>朋友</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex:1,textAlign:'center'}}>Lv2</Text>
          <View style={[styles.bar_back,{flex:5,marginTop:6}]}>
            <View style={styles.bar}></View>
          </View>
          <Text style={{flex:1,textAlign:'center'}}>Lv3</Text>
        </View>
        <View style={styles.center}>
          <View style={styles.float}>
            <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <Image
                 style={[styles.img,{marginRight: 20, marginLeft: 20}]}
                 source={require("../image/日曆.png")}/>
              <Text style={{textAlign:'center',marginTop:'5%'}}>日曆</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <Image
                 style={[styles.img,{marginRight: 20, marginLeft: 20}]}
                 source={require("../image/排名.png")}/>
              <Text style={{textAlign:'center',marginTop:'5%'}}>排名</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <Image
                 style={[styles.img,{marginRight: 20, marginLeft: 20}]}
                 source={require("../image/收藏.png")}/>
              <Text style={{textAlign:'center',marginTop:'5%'}}>收藏</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#f6f6f6",
    flex: 1,
  },
  button: {
    marginBottom: 20,
    height:100,
    padding: 10,
  },
  center:{
    flex:1,
    alignItems:'center',
  },
  float: {
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    height:45,
    width:45,
    resizeMode: Image.resizeMode.contain,
  },
  line: {
    width:1,
    height:70,
    backgroundColor: '#000',
    marginTop:10,
    marginLeft: '5%',
    marginRight: '5%',
  },
  bar: {
    width:100,
    height:8,
    backgroundColor:"#ff473d",
  },
  bar_back:{
    marginBottom:'5%',
    width:260,
    height:8,
    backgroundColor:"#929292",
  }
})
/*以上有改*/
export default Me;
