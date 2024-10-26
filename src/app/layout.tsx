'use client'
import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { useEffect, useState } from 'react';
import { Providers } from './providers';
import Navbar from './components/Navbar';  // Import Navbar
import Footer from './components/Footer';  // Import Footer
function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  return (
    <html lang="en" data-theme={theme}>
    <body className={`bg-${theme === 'dark' ? 'gray-900' : 'white'} text-${theme === 'dark' ? 'white' : 'black'}`}>
      <Providers>
        <Navbar toggleTheme={toggleTheme} theme={theme} />  {/* Pass theme toggle handler to Navbar */}
        <main>{children}</main> {/* Adjust main to start after navbar */}
        <Footer />
      </Providers>
    </body>
  </html>
  );
}

export default RootLayout;
