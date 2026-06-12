import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(join(__dirname, 'public')));

// Multer configuration for file uploads
const uploadDir = join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Data storage files
const dataDir = join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const productsFile = join(dataDir, 'products.json');
const usersFile = join(dataDir, 'users.json');
const ordersFile = join(dataDir, 'orders.json');

// Initialize data files
const initializeDataFiles = () => {
  if (!fs.existsSync(productsFile)) {
    fs.writeFileSync(productsFile, JSON.stringify(getDefaultProducts(), null, 2));
  }
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(ordersFile)) {
    fs.writeFileSync(ordersFile, JSON.stringify([], null, 2));
  }
};

const getDefaultProducts = () => [
  {
    id: uuidv4(),
    name: 'Хлопковая ткань премиум',
    category: 'ткани',
    price: 450,
    color: 'красный',
    description: 'Натуральная хлопковая ткань высокого качества. Ширина: 1.5м, Плотность: 200г/м²',
    composition: '100% хлопок',
    width: '1.5m',
    density: '200g/m²',
    care: 'Стирать при 40°C, не отбеливать',
    image: 'https://via.placeholder.com/300x300?text=Хлопок+Премиум',
    stock: 50
  },
  {
    id: uuidv4(),
    name: 'Лён натуральный',
    category: 'ткани',
    price: 680,
    color: 'бежевый',
    description: 'Экологичная льняная ткань. Ширина: 1.4м, Плотность: 250г/м²',
    composition: '100% лён',
    width: '1.4m',
    density: '250g/m²',
    care: 'Стирать при 60°C',
    image: 'https://via.placeholder.com/300x300?text=Лён+Натуральный',
    stock: 35
  },
  {
    id: uuidv4(),
    name: 'Шёлк искусственный',
    category: 'ткани',
    price: 890,
    color: 'синий',
    description: 'Блестящая синтетическая ткань с шелковистой структурой',
    composition: 'Полиэстер 100%',
    width: '1.5m',
    density: '150g/m²',
    care: 'Стирать при 30°C, сушить в тени',
    image: 'https://via.placeholder.com/300x300?text=Шёлк+Искусственный',
    stock: 25
  },
  {
    id: uuidv4(),
    name: 'Пуговицы декоративные',
    category: 'фурнитура',
    price: 120,
    color: 'разные',
    description: 'Набор из 50 декоративных пуговиц различных размеров',
    composition: 'Полиэстер',
    width: '-',
    density: '-',
    care: '-',
    image: 'https://via.placeholder.com/300x300?text=Пуговицы+Декоративные',
    stock: 100
  },
  {
    id: uuidv4(),
    name: 'Молния металлическая',
    category: 'фурнитура',
    price: 85,
    color: 'серебро',
    description: 'Прочная металлическая молния, длина 50см',
    composition: 'Металл, ткань',
    width: '-',
    density: '-',
    care: '-',
    image: 'https://via.placeholder.com/300x300?text=Молния+Металлическая',
    stock: 150
  },
  {
    id: uuidv4(),
    name: 'Нитки швейные',
    category: 'аксессуары',
    price: 45,
    color: 'разные',
    description: 'Набор качественных швейных ниток 20 цветов',
    composition: 'Полиэстер',
    width: '-',
    density: '-',
    care: '-',
    image: 'https://via.placeholder.com/300x300?text=Нитки+Швейные',
    stock: 200
  }
];

// Helper functions
const readJSON = (file) => {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return [];
  }
};

const writeJSON = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'secret-key', { expiresIn: '7d' });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'secret-key');
  } catch {
    return null;
  }
};

// Routes

// Products
app.get('/api/products', (req, res) => {
  const products = readJSON(productsFile);
  const { category, search, sort, minPrice, maxPrice, color } = req.query;

  let filtered = products;

  if (category && category !== 'все') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (search) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (minPrice || maxPrice) {
    filtered = filtered.filter(p => {
      const price = p.price;
      if (minPrice && price < parseInt(minPrice)) return false;
      if (maxPrice && price > parseInt(maxPrice)) return false;
      return true;
    });
  }

  if (color && color !== 'все') {
    filtered = filtered.filter(p => p.color.toLowerCase() === color.toLowerCase());
  }

  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'popular') {
    filtered.sort(() => Math.random() - 0.5);
  }

  res.json(filtered);
});

app.get('/api/products/:id', (req, res) => {
  const products = readJSON(productsFile);
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Товар не найден' });
  res.json(product);
});

// Add product (Admin)
app.post('/api/products', upload.single('image'), (req, res) => {
  const { adminPassword } = req.body;
  if (adminPassword !== '7316') {
    return res.status(403).json({ error: 'Неверный пароль администратора' });
  }

  const products = readJSON(productsFile);
  const newProduct = {
    id: uuidv4(),
    name: req.body.name,
    category: req.body.category,
    price: parseFloat(req.body.price),
    color: req.body.color,
    description: req.body.description,
    composition: req.body.composition,
    width: req.body.width,
    density: req.body.density,
    care: req.body.care,
    image: req.file ? `/uploads/${req.file.filename}` : 'https://via.placeholder.com/300x300',
    stock: parseInt(req.body.stock) || 0
  };

  products.push(newProduct);
  writeJSON(productsFile, products);
  res.status(201).json(newProduct);
});

// Update product (Admin)
app.put('/api/products/:id', upload.single('image'), (req, res) => {
  const { adminPassword } = req.body;
  if (adminPassword !== '7316') {
    return res.status(403).json({ error: 'Неверный пароль администратора' });
  }

  const products = readJSON(productsFile);
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Товар не найден' });

  products[index] = {
    ...products[index],
    name: req.body.name || products[index].name,
    category: req.body.category || products[index].category,
    price: req.body.price ? parseFloat(req.body.price) : products[index].price,
    color: req.body.color || products[index].color,
    description: req.body.description || products[index].description,
    composition: req.body.composition || products[index].composition,
    width: req.body.width || products[index].width,
    density: req.body.density || products[index].density,
    care: req.body.care || products[index].care,
    stock: req.body.stock !== undefined ? parseInt(req.body.stock) : products[index].stock,
    image: req.file ? `/uploads/${req.file.filename}` : products[index].image
  };

  writeJSON(productsFile, products);
  res.json(products[index]);
});

// Delete product (Admin)
app.delete('/api/products/:id', (req, res) => {
  const { adminPassword } = req.body;
  if (adminPassword !== '7316') {
    return res.status(403).json({ error: 'Неверный пароль администратора' });
  }

  const products = readJSON(productsFile);
  const filtered = products.filter(p => p.id !== req.params.id);
  writeJSON(productsFile, filtered);
  res.json({ success: true });
});

// Users - Register
app.post('/api/auth/register', (req, res) => {
  const { email, password, name, phone } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Заполните обязательные поля' });
  }

  const users = readJSON(usersFile);
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Email уже зарегистрирован' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: uuidv4(),
    email,
    password: hashedPassword,
    name,
    phone: phone || '',
    addresses: [],
    favorites: [],
    bonusBalance: 0,
    orders: [],
    createdAt: new Date()
  };

  users.push(newUser);
  writeJSON(usersFile, users);

  const token = generateToken(newUser.id);
  res.status(201).json({
    success: true,
    token,
    user: {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      phone: newUser.phone
    }
  });
});

// Users - Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email и пароль обязательны' });
  }

  const users = readJSON(usersFile);
  const user = users.find(u => u.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Неверный email или пароль' });
  }

  const token = generateToken(user.id);
  res.json({
    success: true,
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      bonusBalance: user.bonusBalance,
      favorites: user.favorites
    }
  });
});

// Get user profile
app.get('/api/users/:id', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Не авторизован' });

  const decoded = verifyToken(token);
  if (!decoded || decoded.userId !== req.params.id) {
    return res.status(403).json({ error: 'Доступ запрещен' });
  }

  const users = readJSON(usersFile);
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'Пользователь не найден' });

  res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    phone: user.phone,
    addresses: user.addresses,
    favorites: user.favorites,
    bonusBalance: user.bonusBalance,
    orders: user.orders
  });
});

// Update user profile
app.put('/api/users/:id', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Не авторизован' });

  const decoded = verifyToken(token);
  if (!decoded || decoded.userId !== req.params.id) {
    return res.status(403).json({ error: 'Доступ запрещен' });
  }

  const users = readJSON(usersFile);
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Пользователь не найден' });

  users[index] = {
    ...users[index],
    name: req.body.name || users[index].name,
    phone: req.body.phone !== undefined ? req.body.phone : users[index].phone
  };

  writeJSON(usersFile, users);
  res.json(users[index]);
});

// Orders
app.post('/api/orders', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Не авторизован' });

  const decoded = verifyToken(token);
  if (!decoded) return res.status(403).json({ error: 'Неверный токен' });

  const { items, deliveryAddress, paymentMethod, total, deliveryPrice } = req.body;

  if (!items || !deliveryAddress || !paymentMethod) {
    return res.status(400).json({ error: 'Неполные данные заказа' });
  }

  const newOrder = {
    id: uuidv4(),
    userId: decoded.userId,
    orderNumber: 'MAT-' + Date.now(),
    items,
    deliveryAddress,
    paymentMethod,
    total,
    deliveryPrice,
    status: 'новый',
    createdAt: new Date(),
    updatedAt: new Date(),
    notes: ''
  };

  const orders = readJSON(ordersFile);
  orders.push(newOrder);
  writeJSON(ordersFile, orders);

  // Add to user orders
  const users = readJSON(usersFile);
  const userIndex = users.findIndex(u => u.id === decoded.userId);
  if (userIndex !== -1) {
    users[userIndex].orders.push(newOrder.id);
    writeJSON(usersFile, users);
  }

  res.status(201).json(newOrder);
});

app.get('/api/orders/user/:userId', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Не авторизован' });

  const decoded = verifyToken(token);
  if (!decoded || decoded.userId !== req.params.userId) {
    return res.status(403).json({ error: 'Доступ запрещен' });
  }

  const orders = readJSON(ordersFile);
  const userOrders = orders.filter(o => o.userId === req.params.userId);
  res.json(userOrders);
});

// Get all orders (Moderator)
app.get('/api/orders/moderate/all', (req, res) => {
  const { adminPassword } = req.query;
  if (adminPassword !== '7316') {
    return res.status(403).json({ error: 'Неверный пароль администратора' });
  }

  const orders = readJSON(ordersFile);
  res.json(orders);
});

// Update order status (Moderator)
app.patch('/api/orders/:id/status', (req, res) => {
  const { adminPassword, status } = req.body;
  if (adminPassword !== '7316') {
    return res.status(403).json({ error: 'Неверный пароль администратора' });
  }

  const orders = readJSON(ordersFile);
  const index = orders.findIndex(o => o.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Заказ не найден' });

  orders[index].status = status;
  orders[index].updatedAt = new Date();
  writeJSON(ordersFile, orders);
  res.json(orders[index]);
});

// Search orders (Moderator)
app.get('/api/orders/search', (req, res) => {
  const { adminPassword, query, status } = req.query;
  if (adminPassword !== '7316') {
    return res.status(403).json({ error: 'Неверный пароль администратора' });
  }

  let orders = readJSON(ordersFile);

  if (query) {
    orders = orders.filter(o =>
      o.orderNumber.includes(query) ||
      o.deliveryAddress.name.toLowerCase().includes(query.toLowerCase()) ||
      o.deliveryAddress.phone.includes(query)
    );
  }

  if (status && status !== 'все') {
    orders = orders.filter(o => o.status === status);
  }

  res.json(orders);
});

// Export orders to CSV
app.get('/api/orders/export/csv', (req, res) => {
  const { adminPassword } = req.query;
  if (adminPassword !== '7316') {
    return res.status(403).json({ error: 'Неверный пароль администратора' });
  }

  const orders = readJSON(ordersFile);
  let csv = 'Номер заказа,Статус,Сумма,Дата,Имя клиента,Телефон,Адрес\n';

  orders.forEach(order => {
    csv += `"${order.orderNumber}","${order.status}","${order.total}","${order.createdAt}","${order.deliveryAddress.name}","${order.deliveryAddress.phone}","${order.deliveryAddress.address}"\n`;
  });

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=orders.csv');
  res.send(csv);
});

// Favorites
app.post('/api/users/:id/favorites/:productId', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Не авторизован' });

  const decoded = verifyToken(token);
  if (!decoded || decoded.userId !== req.params.id) {
    return res.status(403).json({ error: 'Доступ запрещен' });
  }

  const users = readJSON(usersFile);
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Пользователь не найден' });

  if (!users[index].favorites.includes(req.params.productId)) {
    users[index].favorites.push(req.params.productId);
  }

  writeJSON(usersFile, users);
  res.json({ favorites: users[index].favorites });
});

app.delete('/api/users/:id/favorites/:productId', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Не авторизован' });

  const decoded = verifyToken(token);
  if (!decoded || decoded.userId !== req.params.id) {
    return res.status(403).json({ error: 'Доступ запрещен' });
  }

  const users = readJSON(usersFile);
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Пользователь не найден' });

  users[index].favorites = users[index].favorites.filter(f => f !== req.params.productId);
  writeJSON(usersFile, users);
  res.json({ favorites: users[index].favorites });
});

// Addresses
app.post('/api/users/:id/addresses', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Не авторизован' });

  const decoded = verifyToken(token);
  if (!decoded || decoded.userId !== req.params.id) {
    return res.status(403).json({ error: 'Доступ запрещен' });
  }

  const users = readJSON(usersFile);
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Пользователь не найден' });

  const newAddress = {
    id: uuidv4(),
    ...req.body
  };

  users[index].addresses.push(newAddress);
  writeJSON(usersFile, users);
  res.status(201).json(newAddress);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Initialize and start server
initializeDataFiles();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
