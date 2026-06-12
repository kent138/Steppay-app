import React, { useEffect, useState } from 'react';
import { useAppContext } from '../App';
import '../styles/CatalogPage.css';

const CatalogPage = () => {
  const { setSelectedProductId, setCurrentPage } = useAppContext();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'все',
    search: '',
    sort: 'popular',
    minPrice: '',
    maxPrice: '',
    color: 'все'
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, filters]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Category filter
    if (filters.category !== 'все') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Price filter
    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(filters.maxPrice));
    }

    // Color filter
    if (filters.color !== 'все') {
      filtered = filtered.filter(p => p.color.toLowerCase() === filters.color.toLowerCase());
    }

    // Sorting
    if (filters.sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const colors = ['красный', 'бежевый', 'синий', 'черный', 'белый', 'зеленый'];

  return (
    <div className="catalog-page">
      <h1>Каталог товаров</h1>

      <div className="catalog-container">
        {/* Filters Sidebar */}
        <aside className="filters-sidebar">
          <h3>Фильтры</h3>

          {/* Search */}
          <div className="filter-group">
            <label>Поиск</label>
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>

          {/* Category */}
          <div className="filter-group">
            <label>Категория</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            >
              <option value="все">Все</option>
              <option value="ткани">Ткани</option>
              <option value="фурнитура">Фурнитура</option>
              <option value="аксессуары">Аксессуары</option>
            </select>
          </div>

          {/* Price */}
          <div className="filter-group">
            <label>Цена</label>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="От"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              />
              <input
                type="number"
                placeholder="До"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              />
            </div>
          </div>

          {/* Color */}
          <div className="filter-group">
            <label>Цвет</label>
            <select
              value={filters.color}
              onChange={(e) => setFilters({ ...filters, color: e.target.value })}
            >
              <option value="все">Все</option>
              {colors.map(color => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="filter-group">
            <label>Сортировка</label>
            <select
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            >
              <option value="popular">Популярность</option>
              <option value="price-asc">Цена (возрастание)</option>
              <option value="price-desc">Цена (убывание)</option>
            </select>
          </div>

          <button
            className="reset-filters-btn"
            onClick={() => setFilters({
              category: 'все',
              search: '',
              sort: 'popular',
              minPrice: '',
              maxPrice: '',
              color: 'все'
            })}
          >
            Сбросить фильтры
          </button>
        </aside>

        {/* Products Grid */}
        <div className="products-section">
          <div className="products-count">
            Найдено товаров: <strong>{filteredProducts.length}</strong>
          </div>

          {loading ? (
            <p className="loading">Загрузка товаров...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="no-products">Товары не найдены</p>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                    <p className="product-description">{product.description.substring(0, 60)}...</p>
                    <div className="product-footer">
                      <span className="price">{product.price}₽</span>
                      {product.stock > 0 ? (
                        <span className="in-stock">В наличии</span>
                      ) : (
                        <span className="out-of-stock">Нет в наличии</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;