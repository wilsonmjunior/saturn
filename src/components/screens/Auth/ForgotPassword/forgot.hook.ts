import { useCallback, useState } from "react";
import { useRouter } from "expo-router";

export function useForgotPassword() {
  const [document, setDocument] = useState('');

  const router = useRouter();

  const handleForgotPassword = useCallback(() => {
    if (document) {
      return router.replace('/confirm-forgot-password');
    } 
  }, [document]);

  return {
    handleForgotPassword,
    document,
    setDocument,
  };
}
