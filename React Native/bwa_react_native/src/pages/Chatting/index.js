import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts, getData, showError} from '../../utils';
import {Fire} from '../../config';
const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  useEffect(() => {
    getData('user').then((res) => {
      console.log('user login: ', res);
      setUser(res);
    });
  }, []);

  const chatSend = () => {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`,
      chatContent: chatContent,
    };
    console.log('data untuk di kirim: ', data);
    setChatContent('');

    Fire.database()
      .ref(
        `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`,
      )
      .push(data)
      .then((res) => {
        setChatContent('');
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  console.log('wew', dataDoctor.data.fullName);
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
          <ChatItem />
          <ChatItem isMe />
          <ChatItem />
        </ScrollView>
      </View>
      <InputChat
        onChangeText={(value) => setChatContent(value)}
        value={chatContent}
        onButtonPress={chatSend}
      />
    </View>
  );
};

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
