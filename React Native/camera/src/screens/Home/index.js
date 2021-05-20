import React, { Component } from 'react';
import { Button, Image, Text, View, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require('../../assets/biden.jpeg'),
    };
  }

  takeFoto = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 350,
      compressImageMaxHeight: 300,
      compressImageQuality: 0.7,
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image.path);
      this.setState({ image: { uri: image.path } });
    });
  };

  takeGaleri = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 350,
      compressImageMaxHeight: 300,
      compressImageQuality: 0.7,
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      this.setState({ image: { uri: image.path } });
    });
  };

  cameraLain = () => {
    console.log('test');
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingVertical: 20 }}>
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <View style={{ marginBottom: 10 }}>
              <Image
                source={this.state.image}
                resizeMode="cover"
                style={{ width: 350, height: 300 }}
              />
            </View>
            <Text> Image Sample </Text>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <Button title={'Camera'} color={'red'} onPress={this.takeFoto} />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Button
              title={'Galeri'}
              color={'purple'}
              onPress={this.takeGaleri}
            />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Button
              title={'Camera 1'}
              color={'green'}
              onPress={() => navigation.navigate('Camera')}
            />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Button
              title={'Camera 2'}
              color={'blue'}
              onPress={() => navigation.navigate('Camera2')}
            />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Button
              title={'Camera 3'}
              color={'black'}
              onPress={() => navigation.navigate('Camera3')}
            />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Button
              title={'Camera General'}
              color={'gray'}
              onPress={() => navigation.navigate('Camera4')}
            />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Button
              title={'Camera Umur'}
              color={'gray'}
              onPress={() => navigation.navigate('Camera5')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
