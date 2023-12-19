import React, {ReactNode} from 'react';
import Home from './page';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import {Metadata} from 'next';
import FooterLink from '@/components/Footer/footer';


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
      <body style={{padding: 0, margin: 0}}>
      <MantineProvider defaultColorScheme='dark'>
          {children}
        <FooterLink></FooterLink>
      </MantineProvider>
      </body>
    </html>
  );
}
