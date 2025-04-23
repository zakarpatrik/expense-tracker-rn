import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import { Octicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalStyles } from './constants/styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator id="tab-navigation" screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: '#fff',
      }}>
        <Tab.Screen name="recent-expenses" component={RecentExpensesScreen} options={{
          title: 'Recent',
          headerTitle: 'Recent Expenses',
          tabBarIcon: ({ color, size }) => <Octicons name="clock" color={color} size={size} />,
        }} />
        <Tab.Screen name="all-expenses" component={AllExpensesScreen} options={{
          title: 'All Expenses',
          tabBarIcon: ({ color, size }) => <Octicons name="archive" color={color} size={size} />,
        }} />
      </Tab.Navigator>
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
