import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospitals,
  IconHospitalsActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const componentName = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title == 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    } else if (title == 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    } else if (title == 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    } else {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default componentName;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
