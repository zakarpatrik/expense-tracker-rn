import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Input = ({ label, style, config }) => {
  const inputStyles = config.multiline ? [styles.input, styles.inputMultiline] : styles.input;
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...config} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});