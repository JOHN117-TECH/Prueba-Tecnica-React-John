import { ThemeContextType } from '@interfaces/ThemeContext';
import { createContext } from 'react';

const ThemeContext = createContext<ThemeContextType>({
  theme: 'sunset',
  setTheme: () => {},
});

export default ThemeContext;
