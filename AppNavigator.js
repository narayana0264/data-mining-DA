import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import CounterQR from '../screens/CounterQR';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CounterQR" component={CounterQR} />
    </Stack.Navigator>
  );
}
