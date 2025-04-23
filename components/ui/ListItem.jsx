import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ description, date, amount }) => {
  const navigation = useNavigation();

  const editExpenseHandler = () => {
    navigation.navigate('manage-expenses', { title: 'Edit Expense', edit: true });
  };

  return (
    <Pressable android_ripple={{ color: '#fff' }} style={({ pressed }) => pressed ? styles.buttonPressed : null}
               onPress={editExpenseHandler}>
      <View style={styles.rootContainer}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
  },
  description: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 10,
    color: '#fff',
  },
  amountContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary700,
  },
  buttonPressed: {
    opacity: 0.8,
  },
});