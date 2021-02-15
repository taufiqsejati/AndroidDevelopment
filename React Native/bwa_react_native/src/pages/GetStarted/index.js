import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {bg} from '../../assets/';
import {Button, Gap, ILLogo} from '../../components/';
import {colors, fonts} from '../../utils';

const componentName = ({navigation}) => (
  <ImageBackground source={bg} style={styles.page}>
    <View>
      <ILLogo />
      <Text style={styles.title}>
        Konsultasi dengan dokter jadi lebih mudah & fleksibel
      </Text>
    </View>
    <View>
      <Button
        title="Get Started"
        onPress={() => navigation.replace('Register')}
      />
      <Gap height={16} />
      <Button
        title="Sign in"
        type="secondary"
        onPress={() => navigation.replace('Login')}
      />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 91,
    fontFamily: fonts.primary[600],
  },
});

export default componentName;
