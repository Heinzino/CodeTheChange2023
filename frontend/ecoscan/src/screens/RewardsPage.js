import {View, Text } from 'react-native';
import Header from '../components/Header';

const RewardsPage = () => {
  return (
    <View>
    <Header name="Jun Chao" imageUrl="../assets/newpfp.jpg"/>
    <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>
      Rewards
    </Text>
    </View>
  );
};

export default RewardsPage;