import Reacet from 'react';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer,DarkTheme} from "@react-navigation/native";
import Tabs from './src/navigation/tabs';
import Login from './src/screens/LoginPage';

const App = () => {
  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      // Customize dark theme colors if needed
      // For example, you can override the background color
      background: '#1a1a1a',
      text: 'rgb(255,255,255)',
    },
  };
  return(
    <NavigationContainer theme={customDarkTheme}>
      <Tabs/>
    </NavigationContainer>
  );
};

export default App;
