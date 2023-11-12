import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text } from 'react-native';
import Header from '../components/Header';
import Leaderboard from '../components/LeaderBoardTable';
import SQLite from 'react-native-sqlite-storage'

const RewardsPage = () => {

  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    // Open the SQLite database
    const db = SQLite.openDatabase({ name: 'your_database.db', createFromLocation: '~your_database.db' });

    // Query to get the top 5 users with the most points
    const query = 'SELECT * FROM points ORDER BY points DESC LIMIT 5';

    // Execute the query
    db.transaction((tx) => {
      tx.executeSql(query, [], (tx, results) => {
        const rows = results.rows.raw(); // Convert results to an array

        // Set the top users in the state
        setTopUsers(rows);
      });
    });
  }, []);

  return (
    <View>
    <Header name="Jun Chao" imageUrl="../assets/newpfp.jpg"/>
    <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>
      Login
    </Text>

    <Leaderboard data={topUsers} />
    </View>

  );
};

export default RewardsPage;