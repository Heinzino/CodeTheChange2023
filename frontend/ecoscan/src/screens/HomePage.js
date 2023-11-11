import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text } from 'react-native';
import Header from '../components/Header';

// Home screen component
const HomePage = () => {
  return (
    <View>
    <Header name="Jun Chao" imageUrl="../assets/newpfp.jpg"/>
   
    <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>Home </Text>

    </View>

  );
};

export default HomePage;