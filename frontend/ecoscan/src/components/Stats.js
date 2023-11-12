import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import tw from 'twrnc'; 


const Stats = ({points}) =>{
  return(
    <View style={tw`flex-row justify-between items-center p-4 bg-red-500`}>
        <View style={tw`flex-1`}>
            <Text style={tw`text-white text-lg`}>You have {points} points!</Text>
        </View>
    </View>
  );
} 

export default Stats;

