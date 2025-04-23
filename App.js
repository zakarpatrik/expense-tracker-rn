import './gesture-handler';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabsScreen from './screens/TabsScreen';
import ManageExpensesScreen from './screens/ManageExpensesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator id="stack-navigation" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="tab" component={TabsScreen} />
        <Stack.Screen name="manage-expenses" component={ManageExpensesScreen} options={{ presentation: 'modal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
