'use client';

import React from 'react';

type ThemeResource = {
    theme: string;
    setTheme: (theme: string) => void;
};

const ThemeContext = React.createContext<ThemeResource | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
    const [theme, setTheme] = React.useState('white');
    const value = React.useMemo(() => ({ theme, setTheme }), [theme]);
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function useTheme(): ThemeResource {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}

export { ThemeProvider, useTheme };
