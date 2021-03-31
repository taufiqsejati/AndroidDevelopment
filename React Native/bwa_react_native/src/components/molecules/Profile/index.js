import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {DummyUser, IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({
  children,
  style,
  name,
  desc,
  isRemove,
  photo,
  onPress,
  ...rest
}) => (
  <View style={styles.container}>
    {!isRemove && (
      <View style={styles.borderProfile}>
        <Image source={photo} style={styles.avatar} />
      </View>
    )}
    {isRemove && (
      <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
        <Image source={photo} style={styles.avatar} />
        {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
      </TouchableOpacity>
    )}
    {name && (
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{desc}</Text>
      </View>
    )}
  </View>
);

export default Profile;
const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});