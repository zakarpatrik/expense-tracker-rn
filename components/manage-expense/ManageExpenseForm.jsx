import { View } from 'react-native';
import Input from './Input';

const ManageExpenseForm = () => {
  const amountChangeHandler = () => {

  };

  return (
    <View>
      <Input label="Amount" config={{
        keyboardType: 'decimal-pad',
        onChangeText: amountChangeHandler,
      }} />
      <Input label="Date" config={{
        placeholder: 'YYYY-MM-DD',
        maxLength: 10,
        onChangeText: () => {
        },
      }} />
      <Input label="Description" config={{
        multiline: true,
        autoCapitalize: 'none',
        autoCorrect: false,
      }} />
    </View>
  );
};

export default ManageExpenseForm;