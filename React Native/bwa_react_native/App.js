import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import Router from './src/router';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './src/components';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';

const MainApp = ({params}) => {
  const stateGlobal = useSelector((state) => state);
  // console.log('State Global : ', stateGlobal);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  );
};

const App = ({params}) => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
