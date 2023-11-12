import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const chartWidth = screenWidth - 32; // 16 padding on each side

const Stats = ({ points }) => {
  // Hardcoded data for PieChart
  const pieChartData = [
    { name: 'Cans', quantity: 22, color: 'gold', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Cardboard', quantity: 10, color: 'brown', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Compost', quantity: 4, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Text style={styles.cardTitle}>Your Recycling Stats</Text>
        <View style={styles.chartContainer}>
          <PieChart
            data={pieChartData}
            width={chartWidth}
            height={220}
            chartConfig={styles.chartConfig}
            accessor={'quantity'}
            backgroundColor={'transparent'}
            paddingLeft={'0'} // Set paddingLeft to '0' since we are centering it manually
            // Remove the 'center' prop to let the chart use the full width of its container
            absolute
          />
        </View>
        <Text style={styles.pointsText}>You have earned {points} points!</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center', // This centers the card vertically
    alignItems: 'center', // This centers the card horizontally
  },
  cardContainer: {
    borderRadius: 8,
    backgroundColor: '#262626',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 4,
    padding: 16,
    width: '95%', // You can adjust the width of the card as needed
  },
  chartContainer: {
    alignItems: 'center', // This centers the chart in the container
    marginVertical: 16, // Adds some spacing above and below the chart
  },
  // ... other styles remain the same
});

export default Stats;
