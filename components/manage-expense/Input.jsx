import { Text, TextInput, View } from 'react-native';

const Input = ({ label, config }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...config} />
    </View>
  );
};

export default Input;