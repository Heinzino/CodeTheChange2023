import Reacet from 'react';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer,DarkTheme} from "@react-navigation/native";
import Tabs from './src/navigation/tabs';
import Login from './src/screens/LoginPage';

const App = () => {

  const [points,setPoints] = useState([]);
  const [formData,setFormData] = useState({
    name: '',
    UCID: '',
    hashed_password: '',
    points: 0
  });

  const fetchPoints = async () => {
    const response = await api.get('/points/');
    setPoints(response.data)
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name] : value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); //makes us only control submitting the form
    await api.post('/points/',formData);
    fetchPoints();
    setFormData({
      name: '',
      UCID: '',
      hashed_password: '',
      points: 0
    });
  };

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
