import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../App';

type WelcomeScreenProps = NavigatorScreenParams<RootStackParamList,'WelcomeScreen'> 

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18, color: '#000'}}>Welcome</Text>
      <Button title="click me" onPress={() => navigation.navigate('Home') />
    </View>
  );
};

export default WelcomeScreen;
