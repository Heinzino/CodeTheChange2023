import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage from '../screens/HomePage';
import CameraPage from '../screens/CameraPage';
import RewardsPage from '../screens/RewardsPage';

const Tab = createBottomTabNavigator();


const Tabs = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage}/>
            <Tab.Screen name="Camera" component={CameraPage}/>
            <Tab.Screen name="Rewards" component={RewardsPage}/>
        </Tab.Navigator>
    );
}
export default Tabs;