import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer,DarkTheme} from "@react-navigation/native";
import api from '../../api';
import App from '../../App';

const Pull =() =>{
    
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


    return(
      
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Points</th>
        </tr>
    </thead>
    <tbody>
        {points.map((points) => (
            <tr key={points.id}>
                <td>{points.name}</td>
                <td>{points.points}</td>
            </tr>
        ))}
    </tbody>
    </table>
    );

}

export default Pull;
