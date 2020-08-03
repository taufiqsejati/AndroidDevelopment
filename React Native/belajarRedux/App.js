import React from 'react';
import {LoginScreen} from './src/screens/LoginScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}
