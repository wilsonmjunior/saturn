import { useCallback, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

export async function setStorageItem(key: string, value: string | null) {
  if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

type StorageStateResponse = [[boolean, string | null | undefined], (value: string | null) => void];

export function useStorageState<T>(keyValue: string): StorageStateResponse {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<string | null>();

  useEffect(() => {
    setLoading(true);
  
    SecureStore.getItemAsync(keyValue).then((value) => {
      setState(value);
    }).finally(() => {
      setLoading(false);
    });
  }, [keyValue]);

  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItem(keyValue, value);
    },
    [keyValue]
  );

  return [[loading, state], setValue];
}
