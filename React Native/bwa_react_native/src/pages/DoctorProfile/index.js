import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => (
  <View style={styles.page}>
    <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
    <Profile name="Nairobi Putri Hayza" desc="Dokter Anak" />
    <Gap height={10} />
    <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
    <ProfileItem label="Tempat Praktik" value="Universitas Indonesia, 2020" />
    <ProfileItem label="No. STR" value="Universitas Indonesia, 2020" />
    <View style={styles.action}>
      <Button title="Start Consultation" onPress={() => navigation.goBack()} />
    </View>
  </View>
);

export default DoctorProfile;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  action: {paddingHorizontal: 40, paddingTop: 23},
});
