import { Pressable, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/styles';
import { useDispatch } from 'react-redux';
import { addExpense, removeExpense, updateExpense } from '../store/redux/expenses.slice';
import ManageExpenseForm from '../components/manage-expense/ManageExpenseForm';
import { deleteExpense, storeExpense, updateExpense as httpUpdateExpense } from '../utils/http';
import LoadingOverlay from '../components/ui/LoadingOverlay';

const ManageExpensesScreen = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { edit, id, title } = route.params;
  const isEditing = Boolean(edit);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);


  const cancelPressHandler = () => {
    navigation.goBack();
  };

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);
    await deleteExpense(id);
    setIsSubmitting(false);
    dispatch(removeExpense({ id }));
    cancelPressHandler();
  };

  const confirmExpenseHandler = async (expenseData) => {
    setIsSubmitting(true);
    if (isEditing) {
      dispatch(updateExpense({
        id,
        ...expenseData,
      }));
      await httpUpdateExpense(id, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      dispatch(addExpense({ ...expenseData, id }));
    }
    setIsSubmitting(false);
    cancelPressHandler();
  };

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.rootContainer}>
      <ManageExpenseForm onCancel={cancelPressHandler} onSubmit={confirmExpenseHandler}
                         submitLabel={isEditing ? 'Update' : 'Add'} id={id} />
      {isEditing && (
        <Pressable style={styles.deleteContainer} onPress={deleteExpenseHandler}>
          <Octicons name="trash" size={32} color={GlobalStyles.colors.error500} />
        </Pressable>
      )}
    </View>
  );
};

export default ManageExpensesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  deleteContainer: {
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary50,
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
});