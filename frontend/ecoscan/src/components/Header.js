import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import tw from 'twrnc'; 


const Header = ({name, imageUrl}) =>{
  return(
    <View style={tw`flex-row justify-between items-center p-4 bg-blue-500`}>
        <View style={tw`flex-1`}>
            <Text style={tw`text-white text-lg`}>{name}</Text>
        </View>
        <View style={tw`ml-4`}>
            <Image source={{ uri: imageUrl }} alt="asdf" style={tw`w-10 h-10 rounded-full`} />
        </View>
    </View>

  );
} 

export default Header;

