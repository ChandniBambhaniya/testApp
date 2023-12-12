import React from 'react';
import {Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Suggestion = () => {
  return (
    <View>
      <View>
        <Entypo name="back" color="#000" size={23} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18, color: '#000'}}>Suggestion</Text>
      </View>
    </View>
  );
};

export default Suggestion;
