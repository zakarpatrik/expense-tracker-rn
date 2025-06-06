import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabsScreen from './screens/TabsScreen';
import ManageExpensesScreen from './screens/ManageExpensesScreen';
import { GlobalStyles } from './constants/styles';
import { Provider } from 'react-redux';
import store from './store/redux/store';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator id="stack-navigation" screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: '#fff',
          cardStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        }}>
          <Stack.Screen name="tab" component={TabsScreen} />
          <Stack.Screen name="manage-expenses" component={ManageExpensesScreen}
                        options={{ headerShown: true, presentation: 'modal', headerLeft: () => <></> }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </Provider>
  );
}
