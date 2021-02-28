import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ILLogo} from '../../components/molecules';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      Fire.auth().onAuthStateChanged((user) => {
        if (user) {
          // console.log('user:', user);
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 800);
    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});

export default Splash;
