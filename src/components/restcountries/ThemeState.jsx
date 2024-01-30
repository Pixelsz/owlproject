import { useState } from 'react';

export const useTheme = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const changeTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  return {
    isLightTheme,
    changeTheme,
  };
};
