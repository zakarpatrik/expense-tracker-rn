import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Header = ({ title, amount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>${amount}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 6,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  title: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
  },
});