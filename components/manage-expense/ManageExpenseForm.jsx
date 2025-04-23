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

  const initialValues = {
    amount: {
      value: currentExpense ? currentExpense.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: currentExpense ? currentExpense.date : '',
      isValid: true,
    },
    description: {
      value: currentExpense ? currentExpense.description : '',
      isValid: true,
    },
  };

  const [inputs, setInputs] = useState(initialValues);

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs((prev) => ({ ...prev, [inputIdentifier]: { value: enteredValue, isValid: true } }));
  };

  const submitHandler = () => {
    const { description, amount, date } = inputs;
    const expenseData = {
      description: description.value,
      amount: +amount.value.replaceAll(',', '.'),
      date: formatDate(new Date(date.value)),
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = new Date(date.value).toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !descriptionIsValid || !dateIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((prev) => ({
        amount: { value: prev.amount.value, isValid: amountIsValid },
        date: { value: prev.date.value, isValid: dateIsValid },
        description: { value: prev.description.value, isValid: descriptionIsValid },
      }));
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputContainer}>
        <Input
          label="Amount"
          style={styles.rowInput}
          invalid={!inputs.amount.isValid}
          config={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          invalid={!inputs.date.isValid}
          config={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        config={{
          multiline: true,
          autoCapitalize: 'none',
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>
      )}
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
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
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