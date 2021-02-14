import React from 'react';
import {Text, View, Image} from 'react-native';
import {mydoctor} from '../../../assets/';

const componentName = ({params}) => (
  <View>
    <Image
      source={mydoctor}
      style={{height: 75, width: 86}}
      resizeMode={'cover'}
    />
  </View>
);

export default componentName;
