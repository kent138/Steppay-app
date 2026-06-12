import React, { useState } from 'react';
import { useAppContext } from '../App';
import '../styles/Header.css';

const Header = () => {
  const {
    currentPage,
    setCurrentPage,
    isLoggedIn,
    user,
    showLoginModal,
    setShowLoginModal,
    showRegisterModal,
    setShowRegisterModal,
    handleLogout,
    cart,
    menuOpen,
    setMenuOpen
  } = useAppContext();

  const [showAdminMenu, setShowAdminMenu] = useState(false);

  const handleAdminClick = () => {
    setShowAdminMenu(!showAdminMenu);
  };

  const handleAdminPanelClick = () => {
    const password = prompt('Введите пароль администратора:');
    if (password === '7316') {
      setCurrentPage('admin');
      setShowAdminMenu(false);
    } else if (password) {
      alert('Неверный пароль');
    }
  };

  const handleModeratorClick = () => {
    const password = prompt('Введите пароль модератора:');
    if (password === '7316') {
      setCurrentPage('moderator');
      setShowAdminMenu(false);
    } else if (password) {
      alert('Неверный пароль');
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo" onClick={() => setCurrentPage('home')}>
            <div className="logo-icon">🧵</div>
            <div className="logo-text">
              <h1>МАТРЁШКА</h1>
              <p>Ткани и фурнитура из Читы</p>
            </div>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <button
            className={currentPage === 'home' ? 'active' : ''}
            onClick={() => {
              setCurrentPage('home');
              setMenuOpen(false);
            }}
          >
            Главная
          </button>
          <button
            className={currentPage === 'catalog' ? 'active' : ''}
            onClick={() => {
              setCurrentPage('catalog');
              setMenuOpen(false);
            }}
          >
            Каталог
          </button>
          <button
            className={currentPage === 'about' ? 'active' : ''}
            onClick={() => {
              setCurrentPage('about');
              setMenuOpen(false);
            }}
          >
            О нас
          </button>
          <button
            className={currentPage === 'delivery' ? 'active' : ''}
            onClick={() => {
              setCurrentPage('delivery');
              setMenuOpen(false);
            }}
          >
            Доставка
          </button>
          <button
            className={currentPage === 'contacts' ? 'active' : ''}
            onClick={() => {
              setCurrentPage('contacts');
              setMenuOpen(false);
            }}
          >
            Контакты
          </button>
        </nav>

        <div className="header-right">
          <button
            className="cart-btn"
            onClick={() => setCurrentPage('cart')}
          >
            🛒 Корзина ({cart.length})
            {cartTotal > 0 && <span className="cart-price">{cartTotal.toFixed(0)}₽</span>}
          </button>

          {isLoggedIn ? (
            <div className="user-menu">
              <button
                className="user-btn"
                onClick={() => setCurrentPage('profile')}
              >
                👤 {user?.name}
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                Выход
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button
                className="login-btn"
                onClick={() => setShowLoginModal(true)}
              >
                Вход
              </button>
              <button
                className="register-btn"
                onClick={() => setShowRegisterModal(true)}
              >
                Регистрация
              </button>
            </div>
          )}

          <div className="admin-menu-wrapper">
            <button className="admin-menu-btn" onClick={handleAdminClick}>
              ⋮
            </button>
            {showAdminMenu && (
              <div className="admin-dropdown">
                <button onClick={handleAdminPanelClick}>
                  📝 Редактировать каталог
                </button>
                <button onClick={handleModeratorClick}>
                  📋 Вход в модерацию
                </button>
              </div>
            )}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
