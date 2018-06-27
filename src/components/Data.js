import React, { Component } from 'react';
import { ScrollView, StyleSheet, Linking } from 'react-native';
import { Button, List, ListItem, Text, PricingCard, Tile, Icon } from 'react-native-elements';

// Make a component
class Data extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.title
    }
  };  

  render() {
    const { right }=styles;
    const { title, 
            url,
            image,
            email,
            phone,
            birthday
    } = this.props.navigation.state.params;
/*以下有改*/
  return (
    <ScrollView>

      <Tile
        imageSrc={{ uri: image }}
        // featured
        title={title}
      />

      <List>
        <ListItem
            title="Birthday"
            rightTitle={birthday}
            hideChevron
        />
        <ListItem
            title="Phone"
            rightTitle={phone}
            hideChevron
        />
        <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
        />
      </List>

    </ScrollView>
  );
};
/*以上有改*/
}

const styles = StyleSheet.create({
  right: {
    paddingRight: 50
  }
});


export default Data;