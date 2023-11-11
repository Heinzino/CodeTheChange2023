import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Camera from '../screens/Camera';
import Rewards from '../screens/Rewards';

const Tab = createBottomTabNavigator();


const Tabs = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Camera" component={Camera}/>
            <Tab.Screen name="Rewards" component={Rewards}/>

        </Tab.Navigator>
    );
}
export default Tabs;