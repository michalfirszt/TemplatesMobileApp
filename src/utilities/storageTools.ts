import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value),
    );
  } catch (error) {
    console.log(error);
  }
};

const getData = async (key: string): Promise<undefined | null | string> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue;
  } catch (error) {
    console.log(error);
  }
};

const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export default { getData, storeData, removeData };
