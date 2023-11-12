import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking} from 'react-native';
import { BarCodeScanner} from 'expo-barcode-scanner';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';

export default function CameraPage(){
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar Code with type ${type} and data ${data} has been scanned.`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission!</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera.</Text>
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style = {StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
    </View>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',

  }
})

/** 
// Home screen component
const CameraPage = () => {
  return (
    <View>
      <Header name="Jun Chao" appLogo="Logo"/>
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>
      Camera
      </Text>
    </View>

  );
};

export default CameraPage;
*/