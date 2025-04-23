import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import CustomButton from '../ui/CustomButton';
import { GlobalStyles } from '../../constants/styles';
import { formatDate } from '../../utils/format-date';
import { useSelector } from 'react-redux';
import { selectAllExpenses } from '../../store/redux/expenses.slice';

const ManageExpenseForm = ({ onCancel, onSubmit, submitLabel, id }) => {
  const allExpenses = useSelector(selectAllExpenses);
  const currentExpense = allExpenses.find(expense => expense.id === id);

  const initialValues = currentExpense ? {
    amount: currentExpense.amount.toString(),
    date: currentExpense.date,
    description: currentExpense.description,
  } : {
    amount: '',
    date: '',
    description: '',
  };

  const [inputValues, setInputValues] = useState(initialValues);

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prev) => ({ ...prev, [inputIdentifier]: enteredValue }));
  };

  const submitHandler = () => {
    const { description, amount, date } = inputValues;
    onSubmit({ description, amount: +amount.replaceAll(',', '.'), date: formatDate(new Date(date)) });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputContainer}>
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
      <View style={styles.innerContainer}>
        <CustomButton onPress={onCancel}>Cancel</CustomButton>
        <CustomButton style={styles.updateButton}
                      textStyle={styles.upgradeButtonText}
                      onPress={submitHandler}
        >{submitLabel}</CustomButton>
      </View>
    </View>
  );
};

export default ManageExpenseForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  rowInput: {
    flex: 1,
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 24,
    marginVertical: 16,
  },
  updateButton: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
  upgradeButtonText: {
    color: '#fff',
  },
});