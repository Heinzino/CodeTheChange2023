import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text } from 'react-native';
import Header from '../components/Header';
import Stats from '../components/Stats';
import ProgressBar from '../components/ProgressBar';

// Home screen component
const HomePage = () => {
  return (
    <View>
    
    <Header name="Jun Chao" imageUrl="../assets/newpfp.jpg"/>
    {/*<Stats points="12"/>*/}
    <ProgressBar points="0.9"/>
    <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>Home </Text>
    </View>
  );
};

export default HomePage;