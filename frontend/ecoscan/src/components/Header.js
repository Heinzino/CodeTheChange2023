import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';

const Header = ({ name, logo }) => {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        {logo && <Image source={{ uri: logo }} style={styles.logo} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 52,
    backgroundColor: '#000', // Dark background
  },
  title: {
    color: '#4CAF50', // Bright blue for contrast
    fontSize: 20, // Adjust font size as needed
    fontWeight: 'bold',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular image
  }
});

export default Header;
