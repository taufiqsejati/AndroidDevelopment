import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';

const UserProfile = ({navigation}) => (
  <View style={styles.page}>
    <Header title="Profile" onPress={() => navigation.goBack()} />
    <Gap height={10} />
    <Profile />
    <Gap height={14} />
    <List
      name="Edit Profile"
      desc="Last update yesterday"
      type="next"
      icon="edit-Profile"
    />
    <List
      name="Edit Profile"
      desc="Last update yesterday"
      type="next"
      icon="language"
    />
    <List
      name="Edit Profile"
      desc="Last update yesterday"
      type="next"
      icon="rate"
    />
    <List
      name="Edit Profile"
      desc="Last update yesterday"
      type="next"
      icon="help"
    />
  </View>
);

export default UserProfile;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
