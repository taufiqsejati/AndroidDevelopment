import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {DummyDoctor9} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = ({children, style, ...rest}) => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor9} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',

    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    backgroundColor: colors.primary,
    // backgroundColor: 'red',
    padding: 12,
    paddingRight: 18,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});