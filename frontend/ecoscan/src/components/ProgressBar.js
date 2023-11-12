import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({ points }) => {
    return(
      <View style={styles.container}>
        <Progress.Bar 
          progress={points} 
          width={300} 
          height={40}
          color="#4CAF50" // Vibrant green for contrast
          unfilledColor="#333" // Dark color for the unfilled part
          borderWidth={0}
          borderRadius={10}
        />
        <Text style={styles.text}> {Math.round(points * 100)}% </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF', // White color for text
    fontSize: 20, // Slightly larger for better readability
    marginLeft: 20,
    fontWeight: 'bold', // Bold for a bit more impact
    fontFamily: 'Helvetica Neue', // A clean, modern font. You can also use 'Arial' or 'sans-serif' as alternatives
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 20,
    marginTop: 5,
    width: '100%', // Ensure the container takes the full width

  },
});

export default ProgressBar;