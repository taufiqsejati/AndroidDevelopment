import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {DummyDoctor1, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = ({onPress, name, desc, avatar}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image source={avatar} style={styles.avatar} />
    <View style={styles.profile}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.profession}>{desc}</Text>
    </View>
    <View style={styles.rate}>
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
    </View>
  </TouchableOpacity>
);

export default RatedDoctor;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center',
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
