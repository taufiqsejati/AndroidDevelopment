import React from 'react';
import {Text, View, Image} from 'react-native';
import {arrow} from '../../../assets/';

const componentName = ({params}) => (
  <View>
    <Image
      source={arrow}
      style={{height: 24, width: 24}}
      resizeMode={'cover'}
    />
  </View>
);

export default componentName;
