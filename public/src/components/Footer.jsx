import React from 'react';
import { useAppContext } from '../App';
import '../styles/Footer.css';

const Footer = () => {
  const { setCurrentPage } = useAppContext();

  const handleLinkClick = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>О магазине</h3>
          <button className="link-btn" onClick={() => handleLinkClick('about')}>
            О нас
          </button>
          <button className="link-btn" onClick={() => handleLinkClick('delivery')}>
            Доставка и оплата
          </button>
          <button className="link-btn" onClick={() => handleLinkClick('returns')}>
            Возврат и обмен
          </button>
        </div>

        <div className="footer-section">
          <h3>Помощь</h3>
          <button className="link-btn" onClick={() => handleLinkClick('faq')}>
            FAQ
          </button>
          <button className="link-btn" onClick={() => handleLinkClick('contacts')}>
            Контакты
          </button>
          <button className="link-btn" onClick={() => handleLinkClick('blog')}>
            Блог
          </button>
        </div>

        <div className="footer-section">
          <h3>Контактная информация</h3>
          <p>📍 г. Чита, ул. Бутина 44, помещение 1</p>
          <p>📱 +7-914-359-2767</p>
          <p className="working-hours">Пн-Сб: 10:00 - 18:00</p>
        </div>

        <div className="footer-section">
          <h3>Подписывайтесь</h3>
          <div className="social-links">
            <button className="social-btn">📱 VK</button>
            <button className="social-btn">📲 Telegram</button>
            <button className="social-btn">📷 Instagram</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Магазин тканей и фурнитуры МАТРЁШКА. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;