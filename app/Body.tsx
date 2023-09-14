'use client';

import { useTheme } from "./contexts/ThemeContext";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const Body = ({
    children
}: {
  children: React.ReactNode
}) => {
    const { theme } = useTheme();
    return (
      <body style={{backgroundColor: theme}} className={inter.className}>
        {children}
      </body>
    );
};