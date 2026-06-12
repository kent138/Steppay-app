import React, { useState } from 'react';
import { useAppContext } from '../App';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity, setCurrentPage, clearCart } = useAppContext();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleApplyPromo = () => {
    if (promoCode === 'SKIDKA10') {
      setDiscount(0.1);
    } else if (promoCode === 'SKIDKA20') {
      setDiscount(0.2);
    } else {
      alert('Промокод не найден');
    }
  };

  const subtotal = calculateTotal();
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Корзина</h1>
        <div className="empty-cart">
          <p>Ваша корзина пуста</p>
          <button
            className="continue-shopping-btn"
            onClick={() => setCurrentPage('catalog')}
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Корзина</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h3>{item.name}</h3>
                {item.length && <p>Длина: {item.length} м</p>}
                <p>{item.price}₽</p>
              </div>
              <div className="item-controls">
                <div className="quantity-control">
                  <button onClick={() => updateCartQuantity(item.id, item.quantity - 1, item.length)}>-</button>
                  <input type="number" value={item.quantity} readOnly />
                  <button onClick={() => updateCartQuantity(item.id, item.quantity + 1, item.length)}>+</button>
                </div>
              </div>
              <div className="item-total">
                {(item.price * item.quantity).toFixed(0)}₽
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id, item.length)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Итого</h2>

          <div className="promo-section">
            <input
              type="text"
              placeholder="Промокод"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handleApplyPromo}>Применить</button>
          </div>

          <div className="summary-row">
            <span>Товары:</span>
            <span>{subtotal.toFixed(0)}₽</span>
          </div>

          {discount > 0 && (
            <div className="summary-row discount">
              <span>Скидка ({(discount * 100)}%):</span>
              <span>-{discountAmount.toFixed(0)}₽</span>
            </div>
          )}

          <div className="summary-row total">
            <span>Итого:</span>
            <span>{total.toFixed(0)}₽</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => setCurrentPage('checkout')}
          >
            Оформить заказ
          </button>

          <button
            className="continue-shopping-btn"
            onClick={() => setCurrentPage('catalog')}
          >
            Продолжить покупки
          </button>

          <button
            className="clear-cart-btn"
            onClick={() => {
              if (window.confirm('Вы уверены?')) {
                clearCart();
              }
            }}
          >
            Очистить корзину
          </button>
        </aside>
      </div>
    </div>
  );
};

export default CartPage;