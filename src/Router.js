import React from 'react';
import { DrawerNavigator, TabNavigator, StackNavigator, DrawerItems, createStackNavigator } from 'react-navigation';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Tile, Icon } from 'react-native-elements';

// import Login from './components/Login';
import Albums from './components/Albums';
import Details from './components/Details';
import Me from './components/Me';
import Intro from './components/Intro';
import Teachers from './components/Teachers';
import Videos from './components/Videos';
import Data from './components/Data';

import Challenge from './components/Challenge';
import Setting from './components/Setting';
import Content from './components/Content';
import Friend from './components/Friend'; 

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';

export const UserStack = StackNavigator({
  UserScreen: {
      screen: UserScreen,
      // navigationOptions: {
      //     header: ({ navigate }) => ({
      //         title: '個人資料',
      //         right: (
      //             <Icon
      //                 name='settings'
      //                 iconStyle={{ marginRight: 10 }}
      //                 onPress={() => navigate('SettingScreen')}
      //             />
      //         ),
      //         left: null,
      //     })
      // }
  },
  SettingScreen: {
    screen: SettingScreen,
//     navigationOptions: {
//         header: ({ navigate }) => ({
//             title: 'SETTING',
//             left: (
//                 <Icon
//                     name='navigate-before'
//                     iconStyle={{ marginLeft: 10 }}
//                     onPress={() => navigate('UserScreen')}
//                 />
//             ),
//         })
//     }
}
});

const AlbumStack = StackNavigator({
  Albums: {
    screen: Albums,
  },
  Details: {
    screen: Details,
  }
}
);

const MeStack = StackNavigator({
  Me: {
    screen: Me,
  },
  Friend: {
    screen: Friend,
    }
});

const IntroStack = StackNavigator({
  Intro: {
    screen: Intro,
  },
  Content: {
    screen: Content,
    }
});

const TeacherStack = StackNavigator({
  Teachers: {
    screen: Teachers,
  },
  Data:{
    screen:Data,
  }
});

const VideoStack = StackNavigator({
  Videos: {
    screen: Videos,
  }
});

const ChallengeStack = StackNavigator({
  Challenge: {
    screen: Challenge,
  }
});

const SettingStack = StackNavigator({
  Setting: {
    screen: Setting,
  },
  UserScreen: {
    screen: UserScreen,
  },
  SettingScreen: {
    screen: SettingScreen,
  },
});

export const TabRouter = TabNavigator(
  {
    介紹: {
      screen: IntroStack,
      navigationOptions: {
        tabBarLabel: '介紹',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/介紹.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        )
      }
    },

    招式: {
      screen: AlbumStack,
      navigationOptions: {
        tabBarLabel: '招式',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/招式.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        )
      }
    },

    個人: {
      screen: MeStack,
      navigationOptions: {
        tabBarLabel: '個人',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/個人.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        )
      }
    },

    挑戰: {
      screen: ChallengeStack,
      navigationOptions: {
        tabBarLabel: '挑戰',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/挑戰.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        ),}
    },
    設定: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: '設定',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/設定.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        ),}
    },
  },
  {
      tabBarPosition: 'bottom',
      swipeEnabled: false, //左右滑動切換葉面  
      tabBarOptions: {
        activeTintColor: '#ff473d',
        inactiveTintColor: '#aaa', // 文字和图片未选中颜色
        indicatorStyle: {
          height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
        showIcon: true,
      style: {
        backgroundColor: '#FFF', // TabBar 背景色
      }
    }
  }
);


  const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
  

// export const DrawerRouter = DrawerNavigator(
//   {
//     Albums: {
//       screen: AlbumStack,
//     },
//     Me: {
//       screen: MeStack,
//     },
//     Setting: {
//       screen: SettingStack,
//     },
//   },
//   {
//     initialRouteName: 'Albums',
//     contentOptions: {
//       activeTintColor: '#e91e63',
//     },
//     // drawerWidth: 200,
//     // drawerPosition: 'right',
//     contentComponent:
//       props => (
//         <ScrollView>
//           <Tile
//             imageSrc={require('./assets/ntue.jpg')}
//             featured
//           />
//           <DrawerItems {...props} />
//         </ScrollView>
//       )
//   }
// );

// export const LoginStack = StackNavigator({
//   Login: {
//     screen: Login,
//   },
//   TabRouter: {
//     screen: TabRouter,
//   },
// },
//   {
//     headerMode: 'none',
//   }
// );

export const SignupStack = StackNavigator({
  SignupScreen: {
     screen: SignupScreen,
    //  navigationOptions: {
    //     title: 'USER-INFO'
    //  }
  }
},
  {
    headerMode: 'none',
 }
);

export const LoginStack = StackNavigator({
  LoginScreen: {
     screen: LoginScreen,
  },
  SignupStack: {
     screen: SignupStack,
  },
  TabRouter: {
    screen: TabRouter,
  }
},
  {
     headerMode: 'none',
  }
);