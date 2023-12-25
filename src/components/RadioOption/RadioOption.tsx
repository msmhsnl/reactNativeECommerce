import { Text, View, TouchableOpacity } from "react-native";

import RadioMarker from "../RadioMarker/RadioMarker";

type RadioOptionProps = {
  onPress: () => void;
  title: string;
  active: boolean;
};

const RadioOption = (props: RadioOptionProps) => {
  return (
    <TouchableOpacity
      testID="radio-option"
      className="flex-row items-center"
      onPress={props.onPress}
    >
      <View className="mr-2">
        <RadioMarker active={props.active} />
      </View>
      <Text numberOfLines={1}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RadioOption;
