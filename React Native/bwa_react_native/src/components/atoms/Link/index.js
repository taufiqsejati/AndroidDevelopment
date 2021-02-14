import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';

const componentName = ({title, size, align}) => (
  <View>
    <Text style={styles.text(size, align)}>{title}</Text>
  </View>
);
const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
export default componentName;
