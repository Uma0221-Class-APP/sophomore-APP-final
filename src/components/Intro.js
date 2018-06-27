import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, StyleSheet,TouchableOpacity,Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import { List, ListItem, Icon, Tile, Card, Button } from 'react-native-elements';


import Intro from '../json/Intro.json';
  
const { width } = Dimensions.get('window')

const styles = {
    container:{
        height:200
    },
    img: {
        flex: 1,
        width: '50%',
        height:200,
        resizeMode:'cover',
      },
    desc: {
        backgroundColor: '#FFF',
        flex: 1,
        width: '50%',
        height:200,
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        top: 0,
        left: '50%',
        bottom: 0,
        right: 0,
    },
    title: {
        fontSize: 15,
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#2c2c2c',
        textDecorationLine: 'underline',
        marginBottom: 10,
      },

    /*圖片輪播*/
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        height:200

    }
}

// Make a component
class Contact extends Component {
    state = { Intro: [] };
    
  static navigationOptions = ({ navigation }) => {

    return {
      title: '介紹',
      tabBarLabel: '介紹',
      tabBarIcon: ({ tintColor }) => <Icon name="build" size={35} color={tintColor} />,
      drawerLabel: '介紹',
      drawerIcon: ({ tintColor }) => <Icon name="build" size={25} color={tintColor} />, 
    }
};
 
componentWillMount() {
    this.setState({ Intro });
  }

  goToPageTwo = (Intro) => {
    this.props.navigation.navigate('Content', { ...Intro });
  };

  render() {
    let flexDirection = Intro.imagePosition;
    return (
        
      <ScrollView>
        <View style={[styles.container]}>
                <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay={ true }>
                    <View style={styles.slide1}>
                        <Image resizeMode='stretch' style={styles.image} source={require('../assets/home.jpg')} />
                    </View>
                    <View style={styles.slide2}>
                        <Image resizeMode='stretch' style={styles.image} source={require('../assets/ntue.jpg')} />
                    </View>
                    <View style={styles.slide3}>
                        <Image resizeMode='stretch' style={styles.image} source={require('../assets/login.jpg')} />
                    </View>
                </Swiper>
        </View>
        
       {this.state.Intro.map((Intro) => (
           
           <TouchableOpacity
           onPress={() => this.goToPageTwo(Intro)}
           > 
           <View style={[styles.container,{flexDirection:Intro.imagePosition}]}>
                <Image source={{ uri: Intro.image}} style={styles.img}/>
                <View style={styles.desc}>
                    <Text style={styles.title}>{Intro.title}</Text>
                </View>
           </View>
           </TouchableOpacity>
          
      ))}
      </ScrollView>
      
    );
  };
}

export default Contact;
