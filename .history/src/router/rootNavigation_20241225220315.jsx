import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={REMOTEUSERS} component={GetStarted} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
