import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

// Home screen component
const Camera = () => {
  return (
    <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>
      Camera
    </Text>
  );
};

export default Camera;