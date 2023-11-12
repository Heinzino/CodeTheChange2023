import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text } from 'react-native';
import Header from '../components/Header';
import RewardsTable from '../components/RewardsTable';
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
    <Header name="Jun Chao" appLogo="Logo"/>
    <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>
      Rewards
    </Text>
    <RewardsPage/> 
    </View>

  );
};

export default RewardsPage;