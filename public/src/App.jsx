import React, { useState, useEffect, createContext, useContext } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProfilePage from './pages/ProfilePage';
import AdminPanel from './pages/AdminPanel';
import ModeratorPanel from './pages/ModeratorPanel';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import AboutPage from './pages/AboutPage';
import DeliveryPage from './pages/DeliveryPage';
import ReturnsPage from './pages/ReturnsPage';
import ContactsPage from './pages/ContactsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';

// Context for authentication and global state
export const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage('home');
  };

  const addToCart = (product, quantity = 1, length = null) => {
    const existingItem = cart.find(item => item.id === product.id && item.length === length);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id && item.length === length
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity, length }]);
    }
  };

  const removeFromCart = (productId, length = null) => {
    setCart(cart.filter(item => !(item.id === productId && item.length === length)));
  };

  const updateCartQuantity = (productId, quantity, length = null) => {
    if (quantity <= 0) {
      removeFromCart(productId, length);
    } else {
      setCart(cart.map(item =>
        item.id === productId && item.length === length
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    currentPage,
    setCurrentPage,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    showLoginModal,
    setShowLoginModal,
    showRegisterModal,
    setShowRegisterModal,
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    handleLogout,
    selectedProductId,
    setSelectedProductId,
    menuOpen,
    setMenuOpen
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'catalog':
        return <CatalogPage />;
      case 'product':
        return <ProductPage productId={selectedProductId} />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'profile':
        return isLoggedIn ? <ProfilePage /> : <HomePage />;
      case 'admin':
        return <AdminPanel />;
      case 'moderator':
        return <ModeratorPanel />;
      case 'about':
        return <AboutPage />;
      case 'delivery':
        return <DeliveryPage />;
      case 'returns':
        return <ReturnsPage />;
      case 'contacts':
        return <ContactsPage />;
      case 'faq':
        return <FAQPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Header />
        <main className="main-content">
          {renderPage()}
        </main>
        <Footer />
        {showLoginModal && <LoginModal />}
        {showRegisterModal && <RegisterModal />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
