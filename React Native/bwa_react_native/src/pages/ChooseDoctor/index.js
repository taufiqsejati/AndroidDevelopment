import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor1} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => (
  <View style={styles.page}>
    <Header
      title="Pilih Dokter"
      type="dark"
      onPress={() => navigation.goBack()}
    />
    <List
      onPress={() => navigation.navigate('Chatting')}
      type="next"
      profile={DummyDoctor1}
      name="John McParker Steve"
      desc="Pria"
    />
    <List
      type="next"
      profile={DummyDoctor1}
      name="John McParker Steve"
      desc="Pria"
    />
    <List
      type="next"
      profile={DummyDoctor1}
      name="John McParker Steve"
      desc="Pria"
    />
    <List
      type="next"
      profile={DummyDoctor1}
      name="John McParker Steve"
      desc="Pria"
    />
    <List
      type="next"
      profile={DummyDoctor1}
      name="John McParker Steve"
      desc="Pria"
    />
  </View>
);

export default ChooseDoctor;
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
