import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import NewHot from '../screens/newHot';
import Downloads from '../screens/downloads';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../utils/routes';

const Tab = createBottomTabNavigator();

function TabNavigatior() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
}

export default TabNavigatior;
