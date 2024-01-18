import { useEffect, useState } from "react";

const useLocalStorage = ({ key, initialValue }) => {
  // reading from local storage
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(initialValue)
      );
    } catch (err) {
      console.log(err);
      currentValue = initialValue;
    }
    return currentValue;
  });
  // setting to local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
