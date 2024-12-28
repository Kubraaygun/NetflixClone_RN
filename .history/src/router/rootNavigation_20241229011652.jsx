import GetStarted from '../screens/getStarted';
import {ADDNEWLIST, GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import WatchList from '../screens/watchList';
import SignIn from '../screens/signIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/router/header';
import {ThemeColors} from '../theme/themeColors';
import {Edit2} from 'iconsax-react-native';
import AddNewList from '../screens/watchList/addNewList';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTintColor: ThemeColors.WHITE,
        headerStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
      })}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen
        options={{
          headerRight: () => <Edit2 size="25" color={ThemeColors.WHITE} />,
        }}
        name={WATCHLIST}
        component={WatchList}
      />
      <Stack.Screen name={ADDNEWLIST} component={AddNewList} />
    </Stack.Navigator>
  );
}
export default RootNavigation;
