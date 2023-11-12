import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';

const Header = ({ name, logo }) => {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Welome, {name}</Text>
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
    paddingTop: 80,
    backgroundColor: '#435585', // A dark background color similar to the image
  },
  title: {
    color: '#200000', // A vibrant green color for the text
    fontSize: 20, // Increased font size for better visibility
    fontWeight: '700', // Bold font weight
    fontFamily: 'Arial', // Choose a font that's close to the app's style, ensure it's available or add it as a custom font
  },
  logo: {
    width: 50, // Slightly larger for better visibility
    height: 50, // Slightly larger to match width
    borderRadius: 25, // Circular image
  }
});

export default Header;
