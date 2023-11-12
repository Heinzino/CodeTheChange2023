import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage from '../screens/HomePage';
import CameraPage from '../screens/CameraPage';
import RewardsPage from '../screens/RewardsPage';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();


const Tabs = ()=>{
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
    
              // Set the icon based on the route name
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Camera') {
                iconName = 'camera';
              } else if (route.name === 'Rewards') {
                iconName = 'gift';
              }
    
              // Return the appropriate icon component
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
            <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
            <Tab.Screen name="Camera" component={CameraPage} options={{ headerShown: false }}/>
            <Tab.Screen name="Rewards" component={RewardsPage} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
}
export default Tabs;