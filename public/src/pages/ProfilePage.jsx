import React, { useState, useEffect } from 'react';
import { useAppContext } from '../App';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const { user, setCurrentPage } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('orders');
  const [userData, setUserData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || ''
  });

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/orders/user/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      alert('Профиль обновлён!');
    } catch (error) {
      alert('Ошибка при обновлении профиля');
    }
  };

  return (
    <div className="profile-page">
      <h1>Личный кабинет</h1>

      <div className="profile-container">
        <aside className="profile-menu">
          <button
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            📋 Мои заказы
          </button>
          <button
            className={activeTab === 'profile' ? 'active' : ''}
            onClick={() => setActiveTab('profile')}
          >
            👤 Личные данные
          </button>
          <button
            className={activeTab === 'favorites' ? 'active' : ''}
            onClick={() => setActiveTab('favorites')}
          >
            ❤️ Избранное
          </button>
          <button
            className={activeTab === 'addresses' ? 'active' : ''}
            onClick={() => setActiveTab('addresses')}
          >
            📍 Адреса
          </button>
          <button
            className={activeTab === 'bonuses' ? 'active' : ''}
            onClick={() => setActiveTab('bonuses')}
          >
            🎁 Бонусы
          </button>
        </aside>

        <main className="profile-content">
          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <section className="profile-section">
              <h2>Мои заказы</h2>
              {loading ? (
                <p>Загрузка...</p>
              ) : orders.length === 0 ? (
                <div className="empty-section">
                  <p>У вас нет заказов</p>
                  <button
                    className="continue-shopping-btn"
                    onClick={() => setActiveTab('orders')}
                  >
                    Начать покупки
                  </button>
                </div>
              ) : (
                <div className="orders-list">
                  {orders.map(order => (
                    <div key={order.id} className="order-card">
                      <div className="order-header">
                        <h3>Заказ №{order.orderNumber}</h3>
                        <span className={`status status-${order.status}`}>
                          {order.status === 'новый' && '🆕 Новый'}
                          {order.status === 'в обработке' && '⏳ В обработке'}
                          {order.status === 'отправлен' && '📦 Отправлен'}
                          {order.status === 'доставлен' && '✓ Доставлен'}
                          {order.status === 'отменен' && '✕ Отменен'}
                        </span>
                      </div>
                      <p className="order-date">{new Date(order.createdAt).toLocaleDateString('ru-RU')}</p>
                      <p className="order-total">Сумма: <strong>{order.total}₽</strong></p>
                      <div className="order-items">
                        {order.items.map((item, idx) => (
                          <p key={idx}>{item.name} x{item.quantity}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <section className="profile-section">
              <h2>Личные данные</h2>
              <div className="form">
                <div className="form-group">
                  <label>Имя</label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={userData.email} disabled />
                </div>
                <div className="form-group">
                  <label>Телефон</label>
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  />
                </div>
                <button className="save-btn" onClick={handleUpdateProfile}>
                  Сохранить изменения
                </button>
              </div>
            </section>
          )}

          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <section className="profile-section">
              <h2>Избранные товары</h2>
              <div className="empty-section">
                <p>У вас нет избранных товаров</p>
              </div>
            </section>
          )}

          {/* Addresses Tab */}
          {activeTab === 'addresses' && (
            <section className="profile-section">
              <h2>Мои адреса</h2>
              <div className="empty-section">
                <p>Адреса не добавлены</p>
              </div>
            </section>
          )}

          {/* Bonuses Tab */}
          {activeTab === 'bonuses' && (
            <section className="profile-section">
              <h2>Бонусная программа</h2>
              <div className="bonus-card">
                <h3>Ваш баланс бонусов</h3>
                <p className="bonus-balance">0 ₽</p>
                <p>Каждая покупка дарит вам бонусы!</p>
                <p className="bonus-info">1 рубль = 1 бонус (1% от суммы заказа)</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;