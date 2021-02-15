import React from 'react';
import {StyleSheet, View} from 'react-native';
import {log} from 'react-native-reanimated';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const componentName = ({navigation}) => (
  <View style={styles.page}>
    <Header
      title="Daftar Akun"
      onPress={() => {
        navigation.goBack();
      }}
    />
    <View style={styles.content}>
      <Input label="Full Name" />
      <Gap height={24} />
      <Input label="Pekerjaan" />
      <Gap height={24} />
      <Input label="Email" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={40} />
      <Button
        title="Continue"
        onPress={() => navigation.replace('UploadPhoto')}
      />
    </View>
  </View>
);
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
export default componentName;
