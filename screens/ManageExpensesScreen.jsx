import { Pressable, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { Octicons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/styles';
import { useDispatch } from 'react-redux';
import { addExpense, removeExpense, updateExpense } from '../store/redux/expenses.slice';
import ManageExpenseForm from '../components/manage-expense/ManageExpenseForm';

const ManageExpensesScreen = ({ route, navigation }) => {
  const { edit, id, title } = route.params;
  const isEditing = Boolean(edit);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);


  const cancelPressHandler = () => {
    navigation.goBack();
  };

  const deleteExpenseHandler = () => {
    dispatch(removeExpense({ id }));
    cancelPressHandler();
  };

  const confirmExpenseHandler = (expenseData) => {
    if (isEditing) {
      dispatch(updateExpense({
        id,
        ...expenseData,
      }));
    } else {
      dispatch(addExpense(expenseData));
    }
    cancelPressHandler();
  };

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