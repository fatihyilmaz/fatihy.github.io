"use client";
import '../styles/globals.css';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    if (!document.documentElement.classList.contains('light') && !document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Fatih Yılmaz • Personal Site</title>
        <meta name="description" content="Senior Software Project Manager based in Karlsruhe, Germany." />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
          <nav className="max-w-4xl mx-auto flex justify-between items-center px-6 py-4">
            <div className="flex space-x-6">
              <a href="/" className="font-medium hover:text-blue-600">Home</a>
              <a href="/about" className="font-medium hover:text-blue-600">About</a>
              <a href="/blog" className="font-medium hover:text-blue-600">Blog</a>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm"
            >
              Toggle Theme
            </button>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t dark:border-gray-700 text-center text-sm py-6 px-4">
          © {new Date().getFullYear()} Fatih Yılmaz · All rights reserved.
        </footer>
      </body>
    </html>
  );
}