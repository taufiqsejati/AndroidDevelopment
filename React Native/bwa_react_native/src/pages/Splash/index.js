import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ILLogo} from '../../components/molecules';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unSubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          // console.log('user:', user);
          navigation.replace('App');
        } else {
          navigation.replace('Auth');
        }
      }, 800);
    });
    return () => unSubscribe();
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
