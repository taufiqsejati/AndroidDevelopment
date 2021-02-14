import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation}) => (
  <View style={styles.page}>
    <Header
      type="dark-profile"
      title="Nairobi Putri Hayza"
      onPress={() => navigation.goBack()}
    />
    <View style={styles.content}>
      <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
      <ChatItem />
      <ChatItem isMe />
      <ChatItem />
    </View>
    <InputChat />
  </View>
);

export default Chatting;
const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
