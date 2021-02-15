import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  GetStarted,
  Login,
  Register,
  Splash,
  Translate,
  Translatev2,
  UploadPhoto,
  Doctor,
  Hospitals,
  Messages,
  ChooseDoctor,
  Chatting,
  UserProfile,
  UpdateProfile,
  DoctorProfile,
} from '../pages';
import {ButtomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <ButtomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Hospitals" component={Hospitals} />
    </Tab.Navigator>
  );
};

const Router = ({params}) => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="GetStarted"
      component={GetStarted}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="UploadPhoto"
      component={UploadPhoto}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MainApp"
      component={MainApp}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ChooseDoctor"
      component={ChooseDoctor}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Chatting"
      component={Chatting}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="UserProfile"
      component={UserProfile}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="UpdateProfile"
      component={UpdateProfile}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="DoctorProfile"
      component={DoctorProfile}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Translate"
      component={Translate}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Translatev2"
      component={Translatev2}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default Router;
