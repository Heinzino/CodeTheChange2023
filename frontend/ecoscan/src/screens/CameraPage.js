import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text } from 'react-native';
import Header from '../components/Header';
// Home screen component
const CameraPage = () => {
  return (
    <View>
      <Header name="Jun Chao" appLogo="Logo"/>
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>
      Camera
      </Text>
    </View>

  );
};

export default CameraPage;