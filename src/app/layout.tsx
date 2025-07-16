"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./globals.css";

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-geist-mono), monospace',
  },
  
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
