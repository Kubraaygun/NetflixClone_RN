import GetStarted from '../screens/getStarted';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import WatchList from '../screens/watchList';
import SignIn from '../screens/signIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/router/header';
import {ThemeColors} from '../theme/themeColors';
import {Edit2} from 'iconsax-react-native';

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
          headerRight: () => <Edit2 size="32" color={ThemeColors.WHITE} />,
        }}
        name={GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen
        options={{
          headerShown: false,
          headerRight: () => <Edit2 size="32" color={ThemeColors.WHITE} />,
        }}
        name={WATCHLIST}
        component={WatchList}
      />
    </Stack.Navigator>
  );
}
export default RootNavigation;
