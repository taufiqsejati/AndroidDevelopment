import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors} from '../../utils';

const UpdateProfile = ({navigation}) => (
  <View style={styles.page}>
    <Header title="Edit Profile" onPress={() => navigation.goBack()} />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Profile isRemove />
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Save Profile" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  </View>
);

export default UpdateProfile;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
