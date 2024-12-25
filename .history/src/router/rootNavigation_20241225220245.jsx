import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import {ADDNEWUSER, REMOTEUSERS, USERDETAIL, USERS} from '../utils/routes';
import AddNewUser from '../screens/users/addNewUser';
import UserDetail from '../screens/users/userDetail';
import RemoteUsers from '../screens/users/remoteUsers';
import ThemeColors from '../theme/themeColors';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={REMOTEUSERS} component={RemoteUsers} />
      <Stack.Screen name={USERS} component={Users} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={USERDETAIL} component={UserDetail} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
