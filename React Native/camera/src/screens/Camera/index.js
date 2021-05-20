import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require('../../assets/trump.jpeg'),
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          <RNCamera style={styles.camera}>
            <Image
              style={styles.borderImage}
              source={require('../../assets/border.png')}
            />
          </RNCamera>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
    // These below are most important, they center your border view in container
    // ref: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    alignItems: 'center',
    justifyContent: 'center',
  },

  borderImage: {
    width: 350,
    height: 300,
    // Your styles for image, or custom borders
  },
});
