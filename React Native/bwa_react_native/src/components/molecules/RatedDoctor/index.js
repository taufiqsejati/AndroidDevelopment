import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {DummyDoctor1, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = ({params}) => (
  <View style={styles.container}>
    <Image source={DummyDoctor1} style={styles.avatar} />
    <View style={styles.profile}>
      <Text style={styles.name}>Alexa Rachel</Text>
      <Text style={styles.profession}>Pediatrician</Text>
    </View>
    <View style={styles.rate}>
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
    </View>
  </View>
);

export default RatedDoctor;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {height: 50, width: 50, borderRadius: 50 / 2, marginRight: 12},
  rate: {flexDirection: 'row'},
  profile: {flex: 1},
  name: {fontSize: 16, fontFamily: fonts.primary[600], color: colors.primary},
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
