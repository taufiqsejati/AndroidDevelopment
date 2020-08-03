import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {onUserLogin, onFetchProduct} from '../redux';

const _LoginScreen = (props) => {
  const {userReducer, onUserLogin, onFetchProduct} = props;
  const {user, products} = userReducer;
  console.log(user, products);

  return (
    <View style={styles.container}>
      {user !== undefined && <Text style={{textAlign: 'center'}}>{user.firstName} {user.lastName}</Text>}
      <TouchableOpacity
        style={{
          height: 50,
          width: 220,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: '#FF5733',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          onUserLogin({email: 'test@test.com', password: '1234567'})
        }>
        <Text style={{color: '#FFF', fontSize: 18}}>User Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 220,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: '#FF5733',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => onFetchProduct()}>
        <Text style={{color: '#FFF', fontSize: 18}}>Fetch Products</Text>
      </TouchableOpacity>
      {products != undefined && (
        <Text style={{marginLeft: 20, marginRight: 20, fontSize: 16}}>
          {' '}
          {JSON.stringify(products)}{' '}
        </Text>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
});

const LoginScreen = connect(mapStateToProps, {onUserLogin, onFetchProduct})(
  _LoginScreen,
);

// export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {LoginScreen};
