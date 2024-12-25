import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import {GETSTARTED} from '../utils/routes';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={GETSTARTED} component={GetStarted} />
      <Stack.Screen name={GETSTARTED} component={GetStarted} />
      <Stack.Screen name={GETSTARTED} component={GetStarted} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
