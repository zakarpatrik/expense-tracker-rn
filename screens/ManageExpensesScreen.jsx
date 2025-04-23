import { Pressable, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { Octicons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/styles';
import CustomButton from '../components/ui/CustomButton';
import { useDispatch } from 'react-redux';
import { addExpense, removeExpense, updateExpense } from '../store/redux/expenses.slice';
import { formatDate } from '../utils/format-date';
import ManageExpenseForm from '../components/manage-expense/ManageExpenseForm';

const ManageExpensesScreen = ({ route, navigation }) => {
  const { edit, id, title } = route.params;
  const isEditing = Boolean(edit);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  const innerContainerStyle = [
    styles.innerContainer,
    isEditing && {
      borderBottomWidth: 2,
      borderBottomColor: GlobalStyles.colors.primary200,
    },
  ];

  const cancelPressHandler = () => {
    navigation.goBack();
  };

  const deleteExpenseHandler = () => {
    dispatch(removeExpense({ id }));
    cancelPressHandler();
  };

  const confirmExpenseHandler = () => {
    if (isEditing) {
      dispatch(updateExpense({ id, description: 'New expense', amount: 19.98, date: formatDate(new Date()) }));
    } else {
      dispatch(addExpense({ description: 'New expense', amount: 19.98, date: formatDate(new Date()) }));
    }
    cancelPressHandler();
  };

  return (
    <View style={styles.rootContainer}>
      <ManageExpenseForm />
      <View style={innerContainerStyle}>
        <CustomButton onPress={cancelPressHandler}>Cancel</CustomButton>
        <CustomButton style={styles.updateButton}
                      textStyle={styles.upgradeButtonText}
                      onPress={confirmExpenseHandler}
        >{isEditing ? 'Update' : 'Add'}</CustomButton>
      </View>
      {isEditing && (
        <Pressable onPress={deleteExpenseHandler}>
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
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 24,
    marginBottom: 16,
  },
  updateButton: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
  upgradeButtonText: {
    color: '#fff',
  },
});