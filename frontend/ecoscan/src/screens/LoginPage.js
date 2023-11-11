import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tabs from '../navigation/tabs';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ucid, setUcid] = useState('');

  const validateFields = () => {
    if (!username || !password || (!isLoginView && !ucid)) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }
    return true;
  };

  const handleLoginOrRegister = async () => {
    if (validateFields()) {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      Alert.alert('Success', `Welcome, ${username}!`);
      // Here we navigate to app after successful login
      <NavigationContainer>
      <Tabs/>
      </NavigationContainer>
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32, marginBottom: 20 }}>EcoScan</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ width: '80%', padding: 10, margin: 10, borderWidth: 1, borderColor: 'gray' }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ width: '80%', padding: 10, margin: 10, borderWidth: 1, borderColor: 'gray' }}
      />
      {!isLoginView && (
        <TextInput
          placeholder="UCID"
          value={ucid}
          onChangeText={setUcid}
          style={{ width: '80%', padding: 10, margin: 10, borderWidth: 1, borderColor: 'gray' }}
        />
      )}
      <Button
        title={isLoginView ? "Login" : "Register"}
        onPress={handleLoginOrRegister}
      />
      <Button
        title={isLoginView ? "Need an account? Register" : "Have an account? Login"}
        onPress={() => setIsLoginView(!isLoginView)}
      />
    </View>
  );
};

export default Login;
