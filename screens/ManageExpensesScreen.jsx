import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { Octicons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/styles';
import CustomButton from '../components/ui/CustomButton';

const ManageExpensesScreen = ({ route, navigation }) => {
  const { edit, title } = route.params;
  const isEditing = Boolean(edit);

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

  return (
    <View style={styles.rootContainer}>
      <View style={innerContainerStyle}>
        <CustomButton>Cancel</CustomButton>
        <CustomButton style={styles.updateButton}
                      textStyle={styles.upgradeButtonText}>{isEditing ? 'Update' : 'Add'}</CustomButton>
      </View>
      {isEditing && <Octicons name="trash" size={32} color={GlobalStyles.colors.error500} />}
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