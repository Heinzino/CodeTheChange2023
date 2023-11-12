import Reacet from 'react';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './src/navigation/tabs';
import Login from './src/screens/LoginPage';

const App = () => {
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
};

export default App;
