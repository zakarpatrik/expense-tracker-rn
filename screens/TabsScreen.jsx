import { GlobalStyles } from '../constants/styles';
import RecentExpensesScreen from './RecentExpensesScreen';
import { Octicons } from '@expo/vector-icons';
import AllExpensesScreen from './AllExpensesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconButton from '../components/IconButton';

const Tab = createBottomTabNavigator();

const TabsScreen = ({ navigation }) => {
  const addExpenseHandler = () => {
    navigation.navigate('manage-expenses');
  };
  
  return (
    <Tab.Navigator id="tab-navigation" screenOptions={{
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: '#fff',
      headerRight: () => <IconButton color="#fff" icon="plus" size={24} onPress={addExpenseHandler} />,
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
  );
};

export default TabsScreen;