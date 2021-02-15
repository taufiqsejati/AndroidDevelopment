import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {IconAddPhoto, nullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

const componentName = ({navigation}) => (
  <View style={styles.page}>
    <Header title="Upload Photo" onPress={() => navigation.goBack()} />
    <View style={styles.content}>
      <View style={styles.profile}>
        <View style={styles.avatarWrapper}>
          <Image source={nullPhoto} style={styles.avatar} />
          <IconAddPhoto style={styles.addPhoto} />
        </View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
      <View>
        <Button
          title="Upload and Continue"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={30} />
        <Link
          title="Skip fot this"
          align="center"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  </View>
);

export default componentName;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    marginTop: 4,
  },
});
