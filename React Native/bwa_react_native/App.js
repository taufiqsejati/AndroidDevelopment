import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/router';
import FlashMessage from 'react-native-flash-message';

const componentName = ({params}) => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default componentName;
