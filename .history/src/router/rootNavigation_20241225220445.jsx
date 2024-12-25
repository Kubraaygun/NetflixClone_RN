import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {GETSTARTED, WATCHLIST} from '../utils/routes';
import WatchList from '../screens/watchList';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={GETSTARTED} component={GetStarted} />
      <Stack.Screen name={WATCHLIST} component={WatchList} />
      <Stack.Screen name={GETSTARTED} component={GetStarted} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
