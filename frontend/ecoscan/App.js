import Reacet from 'react';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './src/navigation/tabs';
import Login from './src/screens/LoginPage';

const App = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loginStatus = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
    };

    checkLoginStatus();
  }, []);

  if (!isLoggedin) {
    return <Login />;
  }

  // Main app here
  return(
    <NavigationContainer>
      <Tabs/>
      <Login/>
    </NavigationContainer>
  );
};

export default App;
