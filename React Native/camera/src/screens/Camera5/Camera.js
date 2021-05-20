import React from 'react';
import {
  Dimensions,
  Alert,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CaptureButton from '../Camera4/CaptureButton';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifedAs: '',
      loading: false,
    };
  }

  takePicture = async function () {
    if (this.camera) {
      // Pause the camera's preview
      //   this.camera.pausePreview();

      // Set the activity indicator
      this.setState((previousState, props) => ({
        loading: true,
      }));

      // Set options
      const options = {
        base64: true,
        skipProcessing: true,
      };

      // Get the base64 version of the image
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);

      // Get the identified image
      this.identifyImage(data.base64);
    }
  };

  identifyImage(imageData) {
    // Initialise Clarifai api
    const Clarifai = require('clarifai');

    const app = new Clarifai.App({
      apiKey: '5dac8a5961bf42efa45f24fd09f61fd3',
    });

    // Identify the image
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, { base64: imageData }).then(
      (response) =>
        //   const list1 = response.outputs[0].data.regions[0].data.concepts[20];
        //   const list2 = response.outputs[0].data.regions[0].data.concepts[21];
        // this.displayAnswer(
        //   response.outputs[0].data.regions[0].data.concepts[0].name,
        //   response.outputs[0].data.regions[0].data.concepts[20].value,
        //   response.outputs[0].data.regions[0].data.concepts[21].value,
        {
          if (
            response.outputs[0].data.regions[0].data.concepts[20].value >
            response.outputs[0].data.regions[0].data.concepts[21].value
          ) {
            this.displayAnswer({
              gender:
                response.outputs[0].data.regions[0].data.concepts[20].name,
              umur: response.outputs[0].data.regions[0].data.concepts[0].name,
            });
          } else {
            this.displayAnswer({
              gender:
                response.outputs[0].data.regions[0].data.concepts[21].name,
              umur: response.outputs[0].data.regions[0].data.concepts[0].name,
            });
          }
        },

      // ).catch((err) => alert(err)),
      // {
      //   if (list1 > list2) {
      //     console.log(
      //       response.outputs[0].data.regions[0].data.concepts[20].name,
      //     );
      //   } else {
      //     console.log(
      //       response.outputs[0].data.regions[0].data.concepts[21].name,
      //     );
      //   }
      //   //   console.log(response.outputs[0].data.regions[0].data.concepts);
      // },
    );
  }

  displayAnswer(people) {
    // Dismiss the acitivty indicator
    this.setState((prevState, props) => ({
      identifedAs: people.gender,
      identifedAs2: people.umur,
      loading: false,
    }));

    // Show an alert with the answer on
    Alert.alert(
      this.state.identifedAs,
      this.state.identifedAs2,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );

    // Resume the preview
    this.camera.resumePreview();
  }

  render() {
    return (
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={styles.preview}>
        <ActivityIndicator
          size="large"
          style={styles.loadingIndicator}
          color="#fff"
          animating={this.state.loading}
        />
        <CaptureButton
          buttonDisabled={this.state.loading}
          onClick={this.takePicture.bind(this)}
        />
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
