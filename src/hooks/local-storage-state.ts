import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

export function useLocalStorage(keyValue: string) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const addValue = useCallback(
    async (newValue: string) => {
      try {
        setLoading(loading);
        await AsyncStorage.setItem(keyValue, newValue);
        setValue(newValue);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    },
    [keyValue],
  );

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await AsyncStorage.getItem(keyValue);
        if (response) {
          setValue(response);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [keyValue]);

  return [[value, loading], addValue];
}
