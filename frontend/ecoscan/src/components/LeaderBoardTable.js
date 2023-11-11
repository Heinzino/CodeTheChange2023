import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';

const Leaderboard = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={tw`flex-row justify-between border-b border-gray-300 py-2`}>
      <Text style={tw`flex-1`}>{item.rank}</Text>
      <Text style={tw`flex-3`}>{item.name}</Text>
      <Text style={tw`flex-1 text-right`}>{item.points}</Text>
    </View>
  );

  return (
    <View style={tw`p-4`}>
      <View style={tw`flex-row justify-between mb-2`}>
        <Text style={tw`font-bold text-xl`}>Rank</Text>
        <Text style={tw`font-bold text-xl`}>Name</Text>
        <Text style={tw`font-bold text-xl`}>Points</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Assuming each item has a unique ID
      />
    </View>
  );
};

export default Leaderboard;
