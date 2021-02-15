import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../utils';

const componentName = ({label, value, ...rest}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default componentName;
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
});
