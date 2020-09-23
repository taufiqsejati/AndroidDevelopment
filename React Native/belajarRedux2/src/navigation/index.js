import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SplashScreen from "./SplashScreen";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      // initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'search' : 'search-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: { height: 60 },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

const SplashStack = createStackNavigator();

function SplashStackScreen() {
  return (
    <SplashStack.Navigator
      headerMode="none">
      <SplashStack.Screen name="Splash" component={SplashScreen} />
    </SplashStack.Navigator>
  );
}


// const HomeStack = createStackNavigator();

// function HomeStackScreen() {
//   // const name = useSelector((state) => state.user.Name);
//   return (
//     <HomeStack.Navigator
//       // initialRouteName={name != '' ? 'Home' : 'Login'}
//       headerMode="none">
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       {/* <HomeStack.Screen name="Login" component={LoginScreen} /> */}
//     </HomeStack.Navigator>
//   );
// }

const LoginStack = createStackNavigator();

function LoginStackScreen() {
  // const name = useSelector((state) => state.user.Name);
  return (
    <LoginStack.Navigator
      // initialRouteName={name != '' ? 'Home' : 'Login'}
      headerMode="none">
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

export default () => {
  const name = useSelector((state) => state.user.Name);
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none" 
        initialRouteName='Splash'
        >
        <Stack.Screen name="Splash" component={SplashStackScreen} />
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="Login" component={LoginStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
