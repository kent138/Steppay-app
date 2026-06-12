import React, { useEffect, useState } from 'react';
import { useAppContext } from '../App';
import '../styles/HomePage.css';

const HomePage = () => {
  const { setCurrentPage, setSelectedProductId } = useAppContext();
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularProducts();
  }, []);

  const fetchPopularProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setPopularProducts(data.slice(0, 6));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>МАТРЁШКА</h1>
          <p>Качественные ткани и фурнитура из Читы</p>
          <p className="subtitle">Доставка по всей России</p>
          <button
            className="hero-btn"
            onClick={() => {
              setCurrentPage('catalog');
              window.scrollTo(0, 0);
            }}
          >
            Перейти в каталог
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Категории товаров</h2>
        <div className="categories-grid">
          <div
            className="category-card"
            onClick={() => {
              setCurrentPage('catalog');
              window.scrollTo(0, 0);
            }}
          >
            <div className="category-icon">🧵</div>
            <h3>Ткани</h3>
            <p>Хлопок, лён, шёлк и другие</p>
          </div>
          <div
            className="category-card"
            onClick={() => {
              setCurrentPage('catalog');
              window.scrollTo(0, 0);
            }}
          >
            <div className="category-icon">🔘</div>
            <h3>Фурнитура</h3>
            <p>Пуговицы, молнии, кнопки</p>
          </div>
          <div
            className="category-card"
            onClick={() => {
              setCurrentPage('catalog');
              window.scrollTo(0, 0);
            }}
          >
            <div className="category-icon">🪡</div>
            <h3>Аксессуары</h3>
            <p>Нитки, стразы, ленты</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages">
        <h2>Преимущества магазина</h2>
        <div className="advantages-grid">
          <div className="advantage">
            <div className="advantage-icon">🚚</div>
            <h3>Доставка по России</h3>
            <p>Быстрая доставка Почтой России и СДЭК</p>
          </div>
          <div className="advantage">
            <div className="advantage-icon">⭐</div>
            <h3>Высокое качество</h3>
            <p>Только проверенные материалы и фурнитуру</p>
          </div>
          <div className="advantage">
            <div className="advantage-icon">💰</div>
            <h3>Справедливые цены</h3>
            <p>Прямые поставки, лучшие цены</p>
          </div>
          <div className="advantage">
            <div className="advantage-icon">👥</div>
            <h3>Личный подход</h3>
            <p>Консультация по любым вопросам</p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="popular-products">
        <h2>Популярные товары</h2>
        {loading ? (
          <p>Загрузка товаров...</p>
        ) : (
          <div className="products-grid">
            {popularProducts.map(product => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product.id)}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}₽</p>
                <button className="view-btn">Подробнее</button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* About Shop */}
      <section className="about-shop">
        <h2>О магазине МАТРЁШКА</h2>
        <p>
          Мы - магазин тканей и фурнитуры, расположенный в сердце Сибири, в городе Чита. 
          С 2020 года мы поставляем качественные материалы для рукоделия, шитья и творчества 
          по всей России.
        </p>
        <p>
          Наша миссия - сделать творчество доступным и приятным для каждого. 
          Мы тщательно отбираем каждый товар и гордимся высоким качеством продукции.
        </p>
      </section>
    </div>
  );
};

export default HomePage;