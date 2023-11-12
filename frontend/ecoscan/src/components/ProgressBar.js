import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import tw from 'twrnc'; 
import * as Progress from 'react-native-progress';


const ProgressBar = ({points}) =>{
    return(
      <View style={tw`flex-row justify-between items-center`}>
        <Progress.Bar progress={0.8} width={200} height={20}/>
        <Text>ASDFAS</Text>
      </View>
    );
  } 

export default ProgressBar;