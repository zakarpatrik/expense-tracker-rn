import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const CustomButton = ({ children, style, textStyle, onPress }) => {
  return (
    <Pressable style={({ pressed }) => pressed ? styles.buttonPressed : null} onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    marginHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: GlobalStyles.colors.primary200,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});