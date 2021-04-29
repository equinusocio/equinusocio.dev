import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
