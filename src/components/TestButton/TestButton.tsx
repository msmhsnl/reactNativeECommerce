import { Button } from "react-native";

const TestButton = (props: any) => {
  return <Button testID="TestButton" title="click" onPress={props.onPress} />;
};

export default TestButton;
