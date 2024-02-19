// localStorage.ts

export const setLocalStorageItem = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    // Handle error, e.g., localStorage is disabled or quota is exceeded
    console.error('Error while setting item in localStorage:', error);
  }
};

export const getLocalStorageItem = <T>(key: string): T | null => {
 
  
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null|| typeof  serializedValue === "undefined" ||  serializedValue === "undefined") {
      return null;
    }
    return JSON.parse(serializedValue) as T;
  } catch (error) {


    // Handle error, e.g., corrupted data in localStorage
    console.error('Error while getting item from localStorage:', error);
    return null;
  }
};

export const removeLocalStorageItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Handle error, e.g., localStorage is disabled
    console.error('Error while removing item from localStorage:', error);
  }
};
