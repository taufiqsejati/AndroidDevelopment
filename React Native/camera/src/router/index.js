import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Camera, Camera2, Camera3, Camera4, Camera5, Home } from '../screens';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            title: 'Camera',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera2"
          component={Camera2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera3"
          component={Camera3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera4"
          component={Camera4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera5"
          component={Camera5}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
