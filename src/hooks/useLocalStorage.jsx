import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    console.log(key, defaultValue);
  });

  useEffect(() => {
    console.log(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
