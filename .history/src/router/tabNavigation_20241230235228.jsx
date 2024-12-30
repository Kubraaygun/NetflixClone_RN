import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import NewHot from '../screens/newHot';
import Downloads from '../screens/downloads';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../utils/routes';
import {ThemeColors} from '../theme/themeColors';

const Tab = createBottomTabNavigator();

function TabNavigatior() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
        headerTintColor: ThemeColors.WHITE,
        tabBarStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
      }}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
}

export default TabNavigatior;
