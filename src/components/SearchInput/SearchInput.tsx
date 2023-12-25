import React, { useState, forwardRef, useImperativeHandle } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type SearchInputProps = {
  search: (searchText: string) => void;
  placeholder: string;
};

const SearchInput = forwardRef((props: SearchInputProps, ref) => {
  const [inputText, setInputText] = useState("");

  const clearInput = () => {
    setInputText("");
  };

  useImperativeHandle(ref, () => ({
    clearInput,
  }));

  return (
    <View className="mx-4 my-2 p-2 bg-orange-200 flex-row rounded-xl flex-1">
      <TouchableOpacity
        testID="search-button"
        className="justify-center"
        onPress={() => props.search(inputText)}
      >
        <Ionicons name="search" size={24} color="gray" />
      </TouchableOpacity>

      <TextInput
        testID="search-input"
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
