import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { useState } from 'react';

const ManageExpenseForm = () => {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });
  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prev) => ({ ...prev, [inputIdentifier]: enteredValue }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.innerContainer}>
        <Input label="Amount" style={styles.rowInput} config={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangedHandler.bind(this, 'amount'),
          value: inputValues.amount,
        }} />
        <Input label="Date" style={styles.rowInput} config={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangedHandler.bind(this, 'date'),
          value: inputValues.date,
        }} />
      </View>
      <Input label="Description" config={{
        multiline: true,
        autoCapitalize: 'none',
        autoCorrect: false,
        onChangeText: inputChangedHandler.bind(this, 'description'),
        value: inputValues.description,
      }} />
    </View>
  );
};

export default ManageExpenseForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  rowInput: {
    flex: 1,
  },
});