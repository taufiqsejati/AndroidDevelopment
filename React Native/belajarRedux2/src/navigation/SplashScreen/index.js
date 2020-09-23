import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {connect} from 'react-redux';
import {Images} from '@common';
import Api from '@services/Api';
import {CommonActions} from '@react-navigation/native';


class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      // if (!this.state.firstLaunched) {
      //   this.props.navigation.navigate('Onboarding');
      // } else if (this.state.firstLaunched) {
      //   this.props.navigation.navigate('Beranda');
      // }
      // else if (this.state.firstLaunched && !this.state.email) {
      //   this.props.navigation.navigate("Login");
      // }
      this.props.navigation.navigate('Home')
    }, 700);
  }

  render() {
    const styles = StyleSheet.create({
      Container: {
        flex: 1,
      },
      viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
      viewFooter: {
        width: '100%',
        height: 92,
        justifyContent: 'flex-start',
        position: 'absolute',
        bottom: 0,
      },
      textFooter: {
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '700',
        color: '#58595B',
        marginBottom: 10,
      },
      textFooter1: {
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        color: 'blue',
      },
      errorMessage: {
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'red',
      },
      viewWrapper: {
        alignItems: 'center',
      },
    });

    return (
      <View style={styles.Container}>
        <View style={styles.viewContainer}>
          {/* <StatusBar
            color={colors.primary}
            translucent={false}
            network={false}
            hidden={true}
          /> */}
          <View style={styles.viewWrapper}>
            <Image source={require('../../images/bglogin.jpg')} style={{width: 166, height: 166}}/>
            {/* <Image
              width={166}
              height={166}
              imagePath={require('../../images/bglogin.jpg')}
            /> */}
          </View>
          <View style={styles.viewFooter}>
            <Text style={styles.textFooter}>Version 0.1.0</Text>
            <Text style={styles.textFooter1}>
              ©2019 CV. Laskar Razzaq Berdikari {'\n'}
              All Rights Reserved
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
