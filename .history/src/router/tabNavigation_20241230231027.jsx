import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import NewHot from '../screens/newHot';
import Downloads from '../screens/downloads';

const Tab = createBottomTabNavigator();

function TabNavigatior() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Home" component={NewHot} />
      <Tab.Screen name="Search" component={Downloads} />
    </Tab.Navigator>
  );
}

export default TabNavigatior;
