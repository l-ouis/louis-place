import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: "Louis's Place",
  description: "Louis personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const theme = createTheme({
    fontFamily: 'Libre Baskerville, serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
  });

  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
