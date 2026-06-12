import React, { useState, useEffect } from 'react';
import { useAppContext } from '../App';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, user, setCurrentPage, clearCart, isLoggedIn, setShowLoginModal } = useAppContext();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: '',
    city: '',
    zipCode: '',
    region: 'Москва',
    deliveryMethod: 'pochta',
    paymentMethod: 'cash'
  });
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const deliveryPrices = {
    'Москва': 200,
    'Санкт-Петербург': 250,
    'Новосибирск': 350,
    'Чита': 100,
    'Екатеринбург': 300,
    'default': 400
  };

  useEffect(() => {
    const price = deliveryPrices[formData.region] || deliveryPrices['default'];
    setDeliveryPrice(price);
  }, [formData.region]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return subtotal + deliveryPrice;
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert('Пожалуйста, авторизуйтесь для оформления заказа');
      setShowLoginModal(true);
      return;
    }

    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            length: item.length || undefined
          })),
          deliveryAddress: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            zipCode: formData.zipCode,
            region: formData.region
          },
          paymentMethod: formData.paymentMethod,
          deliveryMethod: formData.deliveryMethod,
          total: calculateTotal(),
          deliveryPrice: deliveryPrice
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert('Ошибка при оформлении заказа: ' + data.error);
        setLoading(false);
        return;
      }

      setOrderId(data.orderNumber);
      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Ошибка при оформлении заказа');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="checkout-page">
        <div className="not-logged-in">
          <h2>Для оформления заказа необходимо авторизоваться</h2>
          <button
            className="login-btn"
            onClick={() => setShowLoginModal(true)}
          >
            Войти в аккаунт
          </button>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="success-message">
          <h2>✓ Заказ успешно оформлен!</h2>
          <p>Номер заказа: <strong>{orderId}</strong></p>
          <p>Вы получите уведомление на email.</p>
          <p>Мы свяжемся с вами в ближайшее время для подтверждения доставки.</p>
          <button
            className="continue-btn"
            onClick={() => setCurrentPage('home')}
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = calculateTotal();

  return (
    <div className="checkout-page">
      <h1>Оформление заказа</h1>

      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <div className="form-section">
            <h3>Личные данные</h3>
            <div className="form-group">
              <label>Имя *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Телефон *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Адрес доставки</h3>
            <div className="form-group">
              <label>Регион *</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                required
              >
                <option value="Москва">Москва</option>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Новосибирск">Новосибирск</option>
                <option value="Чита">Чита</option>
                <option value="Екатеринбург">Екатеринбург</option>
                <option value="other">Другой регион</option>
              </select>
            </div>
            <div className="form-group">
              <label>Город *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Адрес *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="ул. Иванова, д. 12, кв. 34"
                required
              />
            </div>
            <div className="form-group">
              <label>Почтовый индекс</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Способ доставки</h3>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="pochta"
                  checked={formData.deliveryMethod === 'pochta'}
                  onChange={handleInputChange}
                />
                Почта России (5-7 дней)
              </label>
              <label>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="sdek"
                  checked={formData.deliveryMethod === 'sdek'}
                  onChange={handleInputChange}
                />
                СДЭК (2-3 дня)
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Способ оплаты</h3>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleInputChange}
                />
                Наличные при получении
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                />
                Онлайн-оплата картой (без Visa/MasterCard)
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="sbp"
                  checked={formData.paymentMethod === 'sbp'}
                  onChange={handleInputChange}
                />
                СБП (Система Быстрых Платежей)
              </label>
            </div>
          </div>

          <button type="submit" className="submit-order-btn" disabled={loading}>
            {loading ? 'Оформление...' : 'Оформить заказ'}
          </button>
        </form>

        <aside className="order-summary">
          <h3>Ваш заказ</h3>
          <div className="order-items">
            {cart.map((item, index) => (
              <div key={index} className="order-item">
                <span>{item.name} {item.length ? `(${item.length}м)` : ''} x{item.quantity}</span>
                <span>{(item.price * item.quantity).toFixed(0)}₽</span>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Товары:</span>
              <span>{subtotal.toFixed(0)}₽</span>
            </div>
            <div className="total-row">
              <span>Доставка ({formData.deliveryMethod === 'pochta' ? 'Почта России' : 'СДЭК'}):</span>
              <span>{deliveryPrice}₽</span>
            </div>
            <div className="total-row total">
              <span>Итого:</span>
              <span>{total.toFixed(0)}₽</span>
            </div>
          </div>

          {subtotal >= 3000 && (
            <div className="free-delivery-notice">
              ✓ При заказе на сумму 3000₽ доставка бесплатна!
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;