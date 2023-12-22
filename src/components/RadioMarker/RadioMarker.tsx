import React from "react";
import { View } from "react-native";

type RadioMarkerProps = {
  active: boolean;
};

const RadioMarker = (props: RadioMarkerProps) => (
  <View
    style={{
      width: 16,
      height: 16,
      borderRadius: 8,
      borderWidth: props.active ? 4 : 1,
      borderColor: props.active ? "orange" : "gray",
    }}
  ></View>
);

export default RadioMarker;
