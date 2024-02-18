import CryptoJS from "crypto-js";

// Substitua 'yourSecretKey' pela chave secreta usada para criptografar os dados.
const SECRET_KEY = "yourSecretKey";

export function decrypt(encryptedData: string) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  const originalData = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(originalData);
}

export function encrypt(encryptedData: string) {
  const bytes = CryptoJS.AES.encrypt(encryptedData, SECRET_KEY);
  const originalData = bytes.toString(); // CryptoJS.enc.Utf8
  return JSON.parse(originalData);
}
