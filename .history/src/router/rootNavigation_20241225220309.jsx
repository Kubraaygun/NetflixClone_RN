import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={REMOTEUSERS} component={RemoteUsers} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
