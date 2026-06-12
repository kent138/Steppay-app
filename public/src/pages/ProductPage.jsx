import React, { useEffect, useState } from 'react';
import { useAppContext } from '../App';
import '../styles/ProductPage.css';

const ProductPage = ({ productId }) => {
  const { addToCart, setCurrentPage } = useAppContext();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [fabricLength, setFabricLength] = useState('0.5');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    const isFabric = product.category === 'ткани';
    const length = isFabric ? fabricLength : null;
    addToCart(product, quantity, length);
    setMessage('✓ Товар добавлен в корзину!');
    setTimeout(() => setMessage(''), 3000);
  };

  if (loading) return <div className="loading">Загрузка...</div>;
  if (!product) return <div className="error">Товар не найден</div>;

  const isFabric = product.category === 'ткани';

  return (
    <div className="product-page">
      <button className="back-btn" onClick={() => setCurrentPage('catalog')}>
        ← Вернуться в каталог
      </button>

      <div className="product-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} className="main-image" />
        </div>

        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="category-badge">{product.category}</p>
          <p className="color-badge">Цвет: {product.color}</p>

          <div className="price-section">
            <span className="price">{product.price}₽</span>
            {product.stock > 0 ? (
              <span className="in-stock">✓ В наличии ({product.stock} шт)</span>
            ) : (
              <span className="out-of-stock">✗ Нет в наличии</span>
            )}
          </div>

          <div className="description">
            <h3>Описание</h3>
            <p>{product.description}</p>
          </div>

          <div className="specifications">
            <h3>Характеристики</h3>
            <div className="specs-grid">
              {product.composition !== '-' && (
                <div className="spec">
                  <strong>Состав:</strong>
                  <p>{product.composition}</p>
                </div>
              )}
              {product.width !== '-' && (
                <div className="spec">
                  <strong>Ширина:</strong>
                  <p>{product.width}</p>
                </div>
              )}
              {product.density !== '-' && (
                <div className="spec">
                  <strong>Плотность:</strong>
                  <p>{product.density}</p>
                </div>
              )}
              {product.care !== '-' && (
                <div className="spec">
                  <strong>Уход:</strong>
                  <p>{product.care}</p>
                </div>
              )}
            </div>
          </div>

          <div className="order-section">
            {isFabric && (
              <div className="form-group">
                <label>Длина ткани (м):</label>
                <select
                  value={fabricLength}
                  onChange={(e) => setFabricLength(e.target.value)}
                >
                  <option value="0.5">0.5 м</option>
                  <option value="1">1 м</option>
                  <option value="1.5">1.5 м</option>
                  <option value="2">2 м</option>
                  <option value="2.5">2.5 м</option>
                  <option value="3">3 м</option>
                  <option value="4">4 м</option>
                  <option value="5">5 м</option>
                  <option value="10">10 м</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label>Количество {isFabric ? 'комплектов' : 'шт'}:</label>
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {message && <div className="success-message">{message}</div>}

            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Нет в наличии' : 'Добавить в корзину'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;