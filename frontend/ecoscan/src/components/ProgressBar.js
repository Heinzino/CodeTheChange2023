import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({ points }) => {
    return(
      <View style={styles.container}>
        <Progress.Bar 
          progress={points} 
          width={350} 
          height={40}
          color="#4CAF50" // Vibrant green for contrast
          unfilledColor="#333" // Dark color for the unfilled part
          borderWidth={0}
          borderRadius={10}
        />
        <Text style={styles.text}>Points: {Math.round(points * 100)}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 5,
    width: '100%', // Ensure the container takes the full width

  },
  text: {
    color: '#FFF', // White color for text
    fontSize: 18, // Slightly larger for better readability
    marginTop: 20,
    fontWeight: 'bold', // Bold for a bit more impact
    fontFamily: 'Helvetica Neue', // A clean, modern font. You can also use 'Arial' or 'sans-serif' as alternatives
  }
});

export default ProgressBar;
