import React, { Component } from 'react';
import { ScrollView, View, Linking, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Card, Text, List, Tile, ListItem, Icon } from 'react-native-elements';

import challenge from '../json/challenge.json';

// Make a component
class Contact extends Component {
  state = { challenge: [] };
  static navigationOptions = ({ navigation }) => {
    return {
      title: '挑戰',
      tabBarLabel: '挑戰',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    };
  }

  componentWillMount() {
    this.setState({ challenge });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.center,styles.float]}>
        {/* 爬山 */}
            <View style={styles.card}>
              <View style={styles.img_wrap}>
                  <ImageBackground
                    style={styles.img}
                    source={require("../challenge_img/爬山.png")}>
                    <View style={styles.mask}>
                      <View style={styles.float}>
                        <Image style={styles.icon} source={require("../assets/太極.png")}/>
                        <Text style={styles.title}>爬山挑戰</Text>
                      </View>
                      {/* 頭 */}
                      <View style={[styles.head_wrap,styles.float]}>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/22310638_718965468289591_4665877288889718702_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=24d0337000e2c22e5ab6810c6a3a4e8a&oe=5BBB2332")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-1/35901388_2072132716333560_1827584871657111552_n.jpg?_nc_cat=0&oh=d797143e266defb702ecfa395252caeb&oe=5BE91CD4")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/22310510_1297313453714095_135848949235395909_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=055adb6e184018c6039b35dd1084dba3&oe=5BA03AB5")}}/>
                      </View>
                    </View>
                  </ImageBackground>
              </View>
              <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.button_text}>參加</Text>
              </TouchableOpacity>
            </View>
        {/* 姿勢 */}
            <View style={styles.card}>
              <View style={styles.img_wrap}>
                  <ImageBackground
                    style={styles.img}
                    source={require("../challenge_img/姿勢.png")}>
                    <View style={styles.mask}>
                      <View style={styles.float}>
                        <Image style={styles.icon} source={require("../assets/太極.png")}/>
                        <Text style={styles.title}>姿勢挑戰</Text>
                      </View>
                      {/* 頭 */}
                      <View style={[styles.head_wrap,styles.float]}>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/22310638_718965468289591_4665877288889718702_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=24d0337000e2c22e5ab6810c6a3a4e8a&oe=5BBB2332")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-1/35901388_2072132716333560_1827584871657111552_n.jpg?_nc_cat=0&oh=d797143e266defb702ecfa395252caeb&oe=5BE91CD4")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/22310510_1297313453714095_135848949235395909_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=055adb6e184018c6039b35dd1084dba3&oe=5BA03AB5")}}/>
                      </View>
                    </View>
                  </ImageBackground>
              </View>
              <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.button_text}>參加</Text>
              </TouchableOpacity>
            </View>
        </View>
        {/* 時間 */}
        <View style={[styles.center,styles.float]}>
            <View style={styles.card}>
              <View style={styles.img_wrap}>
                  <ImageBackground
                    style={styles.img}
                    source={require("../challenge_img/時間.png")}>
                    <View style={styles.mask}>
                      <View style={styles.float}>
                        <Image style={styles.icon} source={require("../assets/太極.png")}/>
                        <Text style={styles.title}>時間挑戰</Text>
                      </View>
                      {/* 頭 */}
                      <View style={[styles.head_wrap,styles.float]}>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/22310638_718965468289591_4665877288889718702_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=24d0337000e2c22e5ab6810c6a3a4e8a&oe=5BBB2332")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-1/35901388_2072132716333560_1827584871657111552_n.jpg?_nc_cat=0&oh=d797143e266defb702ecfa395252caeb&oe=5BE91CD4")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/22310510_1297313453714095_135848949235395909_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=055adb6e184018c6039b35dd1084dba3&oe=5BA03AB5")}}/>
                      </View>
                    </View>
                  </ImageBackground>
              </View>
              <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.button_text}>參加</Text>
              </TouchableOpacity>
            </View>
        {/* 尋寶 */}
            <View style={styles.card}>
              <View style={styles.img_wrap}>
                  <ImageBackground
                    style={styles.img}
                    source={require("../challenge_img/尋寶.png")}>
                    <View style={styles.mask}>
                      <View style={styles.float}>
                        <Image style={styles.icon} source={require("../assets/太極.png")}/>
                        <Text style={styles.title}>尋寶挑戰</Text>
                      </View>
                      {/* 頭 */}
                      <View style={[styles.head_wrap,styles.float]}>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/22310638_718965468289591_4665877288889718702_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=24d0337000e2c22e5ab6810c6a3a4e8a&oe=5BBB2332")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-1/35901388_2072132716333560_1827584871657111552_n.jpg?_nc_cat=0&oh=d797143e266defb702ecfa395252caeb&oe=5BE91CD4")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/22310510_1297313453714095_135848949235395909_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=055adb6e184018c6039b35dd1084dba3&oe=5BA03AB5")}}/>
                      </View>
                    </View>
                  </ImageBackground>
              </View>
              <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.button_text}>參加</Text>
              </TouchableOpacity>
            </View>
        </View>
        {/* 魔王 */}    
        <View style={[styles.center,styles.float]}>
            <View style={styles.card}>
              <View style={styles.img_wrap}>
                  <ImageBackground
                    style={styles.img}
                    source={require("../challenge_img/魔王.png")}>
                    <View style={styles.mask}>
                      <View style={styles.float}>
                        <Image style={styles.icon} source={require("../assets/太極.png")}/>
                        <Text style={styles.title}>魔王挑戰</Text>
                      </View>
                      {/* 頭 */}
                      <View style={[styles.head_wrap,styles.float]}>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/22310638_718965468289591_4665877288889718702_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=24d0337000e2c22e5ab6810c6a3a4e8a&oe=5BBB2332")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-1/35901388_2072132716333560_1827584871657111552_n.jpg?_nc_cat=0&oh=d797143e266defb702ecfa395252caeb&oe=5BE91CD4")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/22310510_1297313453714095_135848949235395909_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=055adb6e184018c6039b35dd1084dba3&oe=5BA03AB5")}}/>
                      </View>
                    </View>
                  </ImageBackground>
              </View>
              <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.button_text}>參加</Text>
              </TouchableOpacity>
            </View>
        {/* 呼吸 */}  
            <View style={styles.card}>
              <View style={styles.img_wrap}>
                  <ImageBackground
                    style={styles.img}
                    source={require("../challenge_img/呼吸.png")}>
                    <View style={styles.mask}>
                      <View style={styles.float}>
                        <Image style={styles.icon} source={require("../assets/太極.png")}/>
                        <Text style={styles.title}>呼吸挑戰</Text>
                      </View>
                      {/* 頭 */}
                      <View style={[styles.head_wrap,styles.float]}>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/22310638_718965468289591_4665877288889718702_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=24d0337000e2c22e5ab6810c6a3a4e8a&oe=5BBB2332")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-1/35901388_2072132716333560_1827584871657111552_n.jpg?_nc_cat=0&oh=d797143e266defb702ecfa395252caeb&oe=5BE91CD4")}}/>
                        <Image style={styles.head} source={{uri:("https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/22310510_1297313453714095_135848949235395909_n.jpg?_nc_fx=ftpe7-2&_nc_cat=0&oh=055adb6e184018c6039b35dd1084dba3&oe=5BA03AB5")}}/>
                      </View>
                    </View>
                  </ImageBackground>
              </View>
              <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.button_text}>參加</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  };
}

// 以下為style
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#f6f6f6",
    paddingTop:10,
    paddingLeft:5,
    paddingRight:5,
  },
  card:{
    flex:1,
    height:180,
    borderRadius:10,
    margin:10,
    padding:0,
    backgroundColor:'#fff',
    shadowColor:'#000',
    shadowOffset:{width:170, height:200},
    shadowRadius: 10,
  },
  center: {
    alignItems:'center',
  },
  float: {
    flex: 1,
    flexDirection: 'row',
  },
  img_wrap: {
    width:'100%',
    height:140,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow: "hidden",
  },
  img: {
    width:'100%',
    height:140,
    resizeMode: Image.resizeMode.cover,
    marginBottom:0,
  },
  mask: {
    height:50,
    width:'100%',
    backgroundColor:"#eeeeee",
    marginTop:90,
    opacity:0.75,
  },
  icon: {
    height:20,
    width:20,
    margin:8,
    resizeMode: Image.resizeMode.contain,
  },
  title: {
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:5,
  },
  head_wrap: {
    width:'100%',
    height:20,
    paddingLeft:'60%',
    alignItems:'center',
  },
  head: {
    height:18,
    width:18,
    resizeMode: Image.resizeMode.contain,
    borderRadius:999,
  },
  button: {
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    height:40,
    width:'100%',
    backgroundColor:'#ff473d',
  },
  button_text: {
    color:'#fff',
    fontSize:16,
    padding:10,
    textAlign:'center',
  }
})

export default Contact;