import React, {useState,useEffect} from 'react';
import api from './api'
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './src/navigation/tabs';

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

  // Main app here
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
