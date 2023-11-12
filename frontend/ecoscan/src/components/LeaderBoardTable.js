import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import leaderboardData from './leaderboard.json'; // Import the JSON file

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('http://127.0.0.1:8000/points/top-ten/');
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // fetchData();
    setData(leaderboardData);
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.points} Points</Text>
        )}
      />
    </View>
  );
};

export default Leaderboard;