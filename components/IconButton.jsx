import { Pressable, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable android_ripple={{ color: '#fff' }}
               style={({ pressed }) => pressed ? [styles.button, styles.buttonPress] : styles.button}
               onPress={onPress}>
      <Octicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    marginVertical: 12,
    marginHorizontal: 24,
  },
  buttonPress: {
    opacity: 0.7,
  },
});