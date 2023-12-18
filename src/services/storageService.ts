import AsyncStorage from "@react-native-async-storage/async-storage";

const setStorageValue = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // save error
  }
};

const getStorageValue = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // read error
  }
};

const storageService = { setStorageValue, getStorageValue };

export default storageService;
