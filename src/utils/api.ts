import { IFetchUtilTypes } from "../types";

export const persistStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key: string): any => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};

export const fetchUtil = async ({ url, method, body }: IFetchUtilTypes) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
