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
    <Text style={{ fontSize: 22, color:'#FFF', fontWeight:'bold', textAlign: 'left', marginTop: 10, marginLeft: 10, }}>Milestone </Text>
    <ProgressBar points="0.9"/>
    <Text style={{ fontSize: 22, color:'#FFF', fontWeight:'bold', textAlign: 'left', marginTop: 10, marginLeft: 10, }}>Stats </Text>
    <Stats />
    </View>
  );
};

export default HomePage;