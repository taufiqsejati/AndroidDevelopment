import React from 'react';
import {StyleSheet} from 'react-native';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({children, style, isMe, text, date, photo, ...rest}) => {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <Other text={text} date={date} photo={photo} />;
};

export default ChatItem;
const styles = StyleSheet.create({});
