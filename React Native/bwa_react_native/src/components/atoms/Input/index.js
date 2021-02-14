import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';

const componentName = ({label}) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} />
  </View>
);
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
});
export default componentName;
