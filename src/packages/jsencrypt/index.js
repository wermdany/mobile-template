import jsencrypt from "jsencrypt";
import { axios } from "@/config";

const RSA = new jsencrypt();

RSA.setPublicKey(axios.RSA_PUBLIC_KEY);

RSA.setPrivateKey(axios.RSA_PRIVATE_KEY);

/**
 * 解密数据
 * @date 28/10/2020
 * @export
 * @param {*} data
 * @return {*}
 */
export function decrypt(data) {
  return JSON.parse(RSA.decrypt(data));
}

/**
 * 加密数据
 * @date 28/10/2020
 * @export
 * @param {*} data
 * @return {*}
 */
export function encrypt(data) {
  return RSA.encrypt(JSON.stringify(data));
}
