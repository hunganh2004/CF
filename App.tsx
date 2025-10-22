
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider } from './context/ThemeContext';

/**
 * Main application component.
 * Sets up the router and overall page structure.
 */
function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans bg-neutral-gray-50 text-neutral-gray-800 dark:bg-neutral-gray-950 dark:text-neutral-gray-200 transition-colors duration-300">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Chuyển hướng mọi đường dẫn không khớp về trang chủ */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;