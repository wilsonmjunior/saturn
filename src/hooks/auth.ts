import { useContext } from "react";

import { AuthContext } from "@/contexts";

export function useSession() {
  const value = useContext(AuthContext);

  return value;
}