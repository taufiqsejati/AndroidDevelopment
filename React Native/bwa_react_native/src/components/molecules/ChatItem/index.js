import React from 'react';
import {StyleSheet} from 'react-native';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({children, style, isMe, ...rest}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;
const styles = StyleSheet.create({});
