import {ReactNode} from 'react';
import Home from './page';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';
import {Metadata} from 'next';
export const metadata: Metadata = {
    title: 'Estudo-Next',
    description: 'react next study',
};

export default function RootLayout({children}: { children: ReactNode }) {
  return (
      <html lang="pt-br">
      <head>
          <ColorSchemeScript/>
      </head>
      <body>
      <MantineProvider defaultColorScheme='dark'>
          {children}
      </MantineProvider>
      </body>
    </html>
  );
}
