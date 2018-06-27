import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#c1a727',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#4c78c1',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/3.png'),
    imageStyle: styles.image,
    backgroundColor: '#a00b8d',
  }
];

export default class App extends React.Component {
  _onDone = () => {

    this.props.navigation.navigate('TabRouter');// User finished the introduction. Show "real" app
  }
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
      />
    );
  }
}