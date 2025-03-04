import GetStarted from '../screens/getStarted';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import WatchList from '../screens/watchList';
import SignIn from '../screens/signIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        headerLeft: () => <CancelButton onPress={navigation.goBack} />,
      })}>
      <Stack.Screen name={GETSTARTED} component={GetStarted} />
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen name={WATCHLIST} component={WatchList} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
