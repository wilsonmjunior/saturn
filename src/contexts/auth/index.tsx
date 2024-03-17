import { createContext, useCallback } from "react";

import { useStorageState } from "@/hooks/storage-state";

type Auth = {
  signIn(): void;
  signOut(): void;
  session?: string | null;
  isLoading: boolean;
};

export const AuthContext = createContext({} as Auth);

type SessionProviderProps = {
  children: React.ReactNode;
};

export function SessionProvider({ children }: SessionProviderProps) {
  // const [[isLoading, session], setSession] = useStorageState("session");

  const signIn = useCallback(() => {
    // setSession("xxx");
  }, []);

  const signOut = useCallback(() => {
    // setSession(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading: false,
        signIn,
        signOut,
        session: "xxx",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
