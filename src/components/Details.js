import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import { Button, Card, Text, PricingCard, Tile, Icon } from 'react-native-elements';

// Make a component
class Details extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.title
    }
  };  

  render() {
    const { title, 
            url,
            image,
            descriptions
    } = this.props.navigation.state.params;
/*以下有改*/
  return (
    <ScrollView>

      <Tile
        imageSrc={{ uri: image }}
        featured
        title={title}
      />

      <Card>
        <Text style={{ fontWeight:'bold',marginBottom: 15 }}>{title}</Text>
        <Text style={{ marginBottom: 10 }}>
          {descriptions}
        </Text>
      </Card>

    </ScrollView>
  );
};
/*以上有改*/
}

const styles = {
  boldFont: {
    fontWeight: 'bold'
  }
};


export default Details;
