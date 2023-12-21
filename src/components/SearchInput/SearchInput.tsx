import React, { useState, forwardRef, useImperativeHandle } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type SearchInput = {
  search: (searchText: string) => void;
  placeholder: string;
};

const SearchInput = forwardRef((props: SearchInput, ref) => {
  const [inputText, setInputText] = useState("");

  const clearInput = () => {
    setInputText("");
  };

  useImperativeHandle(ref, () => ({
    clearInput,
  }));

  return (
    <View className="mx-4 my-2 p-2 bg-orange-200 flex-row rounded-xl">
      <TouchableOpacity
        className="justify-center"
        onPress={() => props.search(inputText)}
      >
        <Ionicons name="search" size={24} color="gray" />
      </TouchableOpacity>

      <TextInput
        placeholder={props?.placeholder}
        placeholderTextColor={"gray"}
        value={inputText}
        onChangeText={(text) => {
          setInputText(text);
        }}
        className="flex-1 text-base"
        onSubmitEditing={() => props.search(inputText)}
      />
    </View>
  );
});

export default SearchInput;
