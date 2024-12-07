'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import theme from '@/theme';

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
