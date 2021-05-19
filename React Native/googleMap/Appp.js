import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
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
        latitudeDelta: 0.033105763121271004,
        longitudeDelta:
          (Dimensions.get('window').width / Dimensions.get('window').height) *
          0.0122,
        latitude: -6.23321290659503,
        longitude: 106.95284323766828,
      },
      locationChoosen: false,
      marginBottom: 1,
      currentAddress: '',
      mapType: 'standard',
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
        this.getAddress(pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        console.log(err);
        alert('Something went wrong! Please select location manual.');
      },
    );
  };

  getAddress = async (lat, lng) => {
    await Geocoder.fallbackToGoogle('AIzaSyACkrQkqFVENkC8PCDrJXpno1pjErgz5h0');
    try {
      let res = await Geocoder.geocodePosition({lat, lng});
      let addr = res[0].formattedAddress;
      this.setState({
        currentAddress: addr,
      });
    } catch (err) {
      alert(err);
    }
  };

  onChangeValue = (initialRegion) => {
    ToastAndroid.show(
      JSON.stringify(this.state.currentAddress),
      ToastAndroid.SHORT,
    );
    this.setState({
      initialRegion,
    });
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
          title={this.state.currentAddress}
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
            mapType={this.state.mapType}
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
        <View>
          <Text style={{marginBottom: 15}}>Atur alamat</Text>
          <Text>{JSON.stringify(this.state.currentAddress)}</Text>
          {/* <Button
            title="Satellite"
            onPress={() => this.setState({mapType: 'satellite'})}
          />
          <Button
            title="Hybrid"
            onPress={() => this.setState({mapType: 'hybrid'})}
          /> */}
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
