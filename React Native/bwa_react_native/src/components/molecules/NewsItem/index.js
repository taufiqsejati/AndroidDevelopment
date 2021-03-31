import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {DummyNews1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItem = ({params}) => (
  <View style={styles.container}>
    <View style={styles.tittleWrapper}>
      <Text style={styles.title}>
        Is it safe to stay at home during coronavirus?
      </Text>
      <Text style={styles.date}>Today</Text>
    </View>
    <Image source={DummyNews1} style={styles.image} />
  </View>
);

export default NewsItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  tittleWrapper: {flex: 1},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    height: 60,
    width: 80,
    borderRadius: 11,
  },
});