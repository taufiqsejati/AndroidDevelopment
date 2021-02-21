import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './iconOnly';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type == 'btn-icon-send') {
    return <BtnIconSend disable={disable} />;
  }
  if (type == 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg} onPress={onPress}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.Button.secondary.background
        : colors.Button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.Button.disable.background,
  },
  disableText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.Button.disable.text,
  },
  text: (type) => ({
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color:
      type === 'secondary'
        ? colors.Button.secondary.text
        : colors.Button.primary.text,
  }),
});

export default Button;
