import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Suggestion from './Suggestion/Suggestion';
import Notification from './Notification/Notification';
import Profile from './Profile/Profile';
import Field from './Field/Field';
import Tabs from './Tabs/Tabs';
import WelcomeScreen from './Welcome/WelcomeScreen';

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Field: undefined;
  Suggestion: undefined;
  Notification: undefined;
  Profile: undefined;
  WelcomeScreen: undefined;
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="Home" component={Suggestion} />
        <Stack.Screen name="Notifications" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Field} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
