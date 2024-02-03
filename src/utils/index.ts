import CryptoJS from 'crypto-js';

// Substitua 'yourSecretKey' pela chave secreta usada para criptografar os dados.
const SECRET_KEY = 'yourSecretKey';

export function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  const originalData = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(originalData);
};

// const fetchData = async (url) => {
//   try {
//     const response = await Axios.get(url);
//     const decryptedData = decryptData(response.data);
//     console.log(decryptedData);
//     return decryptedData;
//   } catch (error) {
//     console.error('Erro ao buscar ou descriptografar dados:', error);
//     throw error;
//   }
// };
