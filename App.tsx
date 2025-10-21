
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

import Header from './components/Header';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import ReviewPage from './pages/ReviewPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import AccountPage from './pages/AccountPage';

/**
 * Main application component.
 * Sets up the router, context providers, and overall page structure.
 */
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <HashRouter>
            <div className="flex flex-col min-h-screen font-sans bg-coffee-brown-50 text-coffee-brown-900">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/menu" element={<MenuPage />} />
                  <Route path="/menu/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/confirmation" element={<OrderConfirmationPage />} />
                  <Route path="/review" element={<ReviewPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/account" element={<AccountPage />} />
                </Routes>
              </main>
              <Footer />
              <ToastContainer />
            </div>
          </HashRouter>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
