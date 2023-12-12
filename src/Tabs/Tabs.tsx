import React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import Suggestion from '../Suggestion/Suggestion';
import Notification from '../Notification/Notification';
import Profile from '../Profile/Profile';
import Field from '../Field/Field';

const Tab = createBottomTabNavigator();

function Tabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#ff7518',
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Suggestion}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="home" size={size} color={color} />
          ),
          // tabBarStyle: {
          //   borderTopRightRadius: 150,
          //   borderTopLeftRadius: 150,
          //   paddingVertical: 3,
          // },
        }}
      />
      <Tab.Screen
        name="Field"
        component={Field}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="game-controller" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
