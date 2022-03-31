import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

// const Drawer = createDrawerNavigator();
const Drawer = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {backgroundColor: '#3c0a6b'},
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b',

          // drawerActiveBackgroundColor: '#f0e1ff',
          // drawerActiveTintColor: '#3c0a6b',
          // drawerStyle: {
          //   backgroundColor: '#ccc',
          // },
        }}>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          // options={{
          //   drawerLabel: 'Welcome Screen',
          //   drawerIcon: ({color, size}) => (
          //     <Icon name="home" color={color} size={size} />
          //   ),
          // }}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          // options={{
          //   drawerIcon: ({color, size}) => (
          //     <Icon name="person" color={color} size={size} />
          //   ),
          // }}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
