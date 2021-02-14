import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/router';

const componentName = ({params}) => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default componentName;
