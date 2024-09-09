import CryptoJS from "crypto-js";

export const generarHash = (input: string): string => {
  return CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
};

export const hashId = (id: number): string => {
  return generarHash(id.toString());
};
