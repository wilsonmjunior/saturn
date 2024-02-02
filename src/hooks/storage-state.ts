import { useCallback, useEffect, useReducer } from "react";
import * as SecureStore from 'expo-secure-store';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return useReducer(
    (state: [boolean, T | null], action: T | null = null): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>;
}

export async function setStorageItem(key: string, value: string | null) {
  if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

export function useStorageState(keyValue: string): UseStateHook<string> {
  const [state, setState] = useAsyncState<string>();

  useEffect(() => {
    SecureStore.getItemAsync(keyValue).then(value => {
      setState(value);
    });
  }, [keyValue]);

  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItem(keyValue, value);
    },
    [keyValue]
  );

  return [state, setValue];
}
