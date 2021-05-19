import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        latitudeDelta: 0.0922,
        longitudeDelta:
          (Dimensions.get('window').width / Dimensions.get('window').height) *
          0.0922,
        latitude: -0.789275,
        longitude: 113.921327,
      },
      marginBottom: 1,
      currentAddress: [],
    };
  }

  componentDidMount() {
    this.handleUserLocation();
    setTimeout(() => this.setState({marginBottom: 0}), 100);
  }

  handleUserLocation = () => {
    // alert(JSON.stringify('pos'));
    Geolocation.getCurrentPosition(
      (pos) => {
        this.map.animateToRegion({
          ...this.state.initialRegion,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        this.setState({
          initialRegion: {
            ...this.state.initialRegion,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
          locationChoosen: true,
        });
      },
      (err) => {
        console.log(err);
        alert('Something went wrong! Please select location manual.');
      },
    );
  };

  getAddress = async (lat, lng) => {
    Geocoder.fallbackToGoogle('AIzaSyAXW-WDp0MF5si6oFXaukDQuThTr1wqmDE');
    try {
      let res = await Geocoder.geocodePosition({lat, lng});
      let addr1 = res[0];
      console.log(addr1);
      this.setState({
        currentAddress: addr1,
      });
    } catch (err) {
      alert(err);
    }
  };

  onChangeValue = (e) => {
    this.setState({initialRegion: e});
    this.getAddress(e.latitude, e.longitude);
  };

  render() {
    let marker = (
      <View
        style={{
          top: '50%',
          left: '50%',
          marginLeft: -24,
          marginTop: -48,
          position: 'absolute',
        }}>
        <MapView.Marker
          style={{height: 48, width: 48}}
          coordinate={this.state.initialRegion}
          title={this.state.currentAddress.formattedAddress}
          ref={(ref) => (this.mark = ref)}>
          <Image
            style={{height: 48, width: 48}}
            source={require('./trump.png')}
          />
        </MapView.Marker>
      </View>
    );
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <MapView
            style={{flex: 1, marginBottom: this.state.marginBottom}}
            showsMyLocationButton={true}
            showsPointsOfInterest={true}
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={this.state.initialRegion}
            onRegionChangeComplete={this.onChangeValue}
            ref={(ref) => (this.map = ref)}>
            {marker}
          </MapView>
          <View
            style={{
              top: '50%',
              left: '50%',
              marginLeft: -24,
              marginTop: -48,
              position: 'absolute',
            }}>
            <Image
              style={{height: 48, width: 48}}
              source={require('./trump.png')}
            />
          </View>
        </View>
        <View style={{marginBottom: 15, padding: 15}}>
          <Text style={{marginBottom: 15}}>Atur Alamat</Text>
          <Text style={{marginBottom: 5}}>
            {/* {this.state.currentAddress.feature == null
              ? this.state.currentAddress.streetName
              : this.state.currentAddress.streetName} */}
            {this.state.currentAddress.feature == null
              ? this.state.currentAddress.streetName
              : this.state.currentAddress.feature}
          </Text>
          <Text>{this.state.currentAddress.formattedAddress}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  fullMapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
});
