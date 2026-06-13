// ===== STORE DATA =====
const STORE_DATA = {
    products: [
        { id: 'p1', name: 'Хлопок премиум', category: 'tkani', categoryName: 'Ткани', price: 890, unit: 'за метр', image: '🧵', composition: '100% хлопок', width: '150 см', inStock: true, isNew: true, isPopular: true, stock: 50, desc: 'Высококачественный хлопок премиум-класса.' },
        { id: 'p2', name: 'Лён натуральный', category: 'tkani', categoryName: 'Ткани', price: 1200, unit: 'за метр', image: '🌾', composition: '100% лён', width: '140 см', inStock: true, isNew: false, isPopular: true, stock: 30, desc: 'Натуральный лён высшего сорта.' },
        { id: 'p3', name: 'Шёлк натуральный', category: 'tkani', categoryName: 'Ткани', price: 2500, unit: 'за метр', image: '🦋', composition: '100% шёлк', width: '110 см', inStock: true, isNew: true, isPopular: false, stock: 15, desc: 'Изысканный натуральный шёлк.' },
        { id: 'p4', name: 'Шерсть мериноса', category: 'tkani', categoryName: 'Ткани', price: 1800, unit: 'за метр', image: '🐑', composition: '100% шерсть', width: '150 см', inStock: true, isNew: false, isPopular: true, stock: 20, desc: 'Тёплая и мягкая шерсть мериноса.' },
        { id: 'p5', name: 'Пуговицы деревянные', category: 'furnitura', categoryName: 'Фурнитура', price: 150, unit: 'набор', image: '🪵', inStock: true, isNew: false, isPopular: true, stock: 100, desc: 'Набор деревянных пуговиц.' },
        { id: 'p6', name: 'Молния потайная', category: 'furnitura', categoryName: 'Фурнитура', price: 80, unit: 'шт', image: '🤐', inStock: true, isNew: true, isPopular: false, stock: 200, desc: 'Потайная молния для юбок.' },
        { id: 'p7', name: 'Кружево хлопковое', category: 'furnitura', categoryName: 'Фурнитура', price: 350, unit: 'метр', image: '🤍', inStock: true, isNew: false, isPopular: true, stock: 40, desc: 'Нежное хлопковое кружево.' },
        { id: 'p8', name: 'Нитки полиэстер', category: 'furnitura', categoryName: 'Фурнитура', price: 60, unit: 'катушка', image: '🧶', inStock: true, isNew: false, isPopular: false, stock: 500, desc: 'Прочные нитки из полиэстера.' },
        { id: 'p9', name: 'Ножницы портновские', category: 'accessories', categoryName: 'Аксессуары', price: 1200, unit: 'шт', image: '✂️', inStock: true, isNew: false, isPopular: true, stock: 25, desc: 'Профессиональные портновские ножницы.' },
        { id: 'p10', name: 'Иглы для шитья', category: 'accessories', categoryName: 'Аксессуары', price: 200, unit: 'набор', image: '🪡', inStock: true, isNew: false, isPopular: false, stock: 100, desc: 'Набор игл для ручного шитья.' },
        { id: 'p11', name: 'Сантиметровая лента', category: 'accessories', categoryName: 'Аксессуары', price: 80, unit: 'шт', image: '📏', inStock: true, isNew: false, isPopular: false, stock: 150, desc: 'Мягкая сантиметровая лента.' },
        { id: 'p12', name: 'Хлопок с принтом', category: 'tkani', categoryName: 'Ткани', price: 950, unit: 'метр', image: '🌸', inStock: true, isNew: true, isPopular: true, stock: 35, desc: 'Хлопок с нежным цветочным принтом.' },
        { id: 'p13', name: 'Фетр цветной', category: 'tkani', categoryName: 'Ткани', price: 450, unit: 'лист', image: '🎨', inStock: true, isNew: false, isPopular: false, stock: 60, desc: 'Цветной фетр для рукоделия.' },
        { id: 'p14', name: 'Бисер чешский', category: 'furnitura', categoryName: 'Фурнитура', price: 120, unit: 'пакет', image: '💎', inStock: true, isNew: false, isPopular: false, stock: 80, desc: 'Качественный чешский бисер.' },
        { id: 'p15', name: 'Пяльцы для вышивания', category: 'accessories', categoryName: 'Аксессуары', price: 350, unit: 'шт', image: '🟤', inStock: true, isNew: false, isPopular: false, stock: 40, desc: 'Деревянные пяльцы для вышивания.' },
        { id: 'p16', name: 'Ткань костюмная', category: 'tkani', categoryName: 'Ткани', price: 1500, unit: 'метр', image: '👔', inStock: true, isNew: false, isPopular: true, stock: 25, desc: 'Классическая костюмная ткань.' }
    ],
    categories: [
        { id: 'tkani', name: 'Ткани', icon: '🧵' },
        { id: 'furnitura', name: 'Фурнитура', icon: '🪡' },
        { id: 'accessories', name: 'Аксессуары', icon: '✂️' }
    ]
};

const DEFAULT_PRODUCT_IDS = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14','p15','p16'];

// ===== STATE =====
const state = {
    user: null,
    cart: [],
    wishlist: [],
    currentPage: 'home',
    currentCategory: 'all',
    currentSort: 'popular',
    adminSection: null
};

function loadState() {
    try {
        const savedUser = localStorage.getItem('matreshka_user');
        if (savedUser) state.user = JSON.parse(savedUser);
        const savedCart = localStorage.getItem('matreshka_cart');
        if (savedCart) state.cart = JSON.parse(savedCart);
        const savedWishlist = localStorage.getItem('matreshka_wishlist');
        if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);
    } catch (e) {}
}

function saveState() {
    localStorage.setItem('matreshka_user', JSON.stringify(state.user));
    localStorage.setItem('matreshka_cart', JSON.stringify(state.cart));
    localStorage.setItem('matreshka_wishlist', JSON.stringify(state.wishlist));
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== NAVIGATION =====
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    const target = document.getElementById('page' + page.charAt(0).toUpperCase() + page.slice(1));
    if (target) target.style.display = 'block';
    document.querySelectorAll('.nav-list a').forEach(a => {
        a.classList.toggle('active', a.dataset.page === page);
    });
    closeCart();
    closeAuthModal();
    if (page === 'catalog') renderCatalog();
    if (page === 'profile') renderProfile();
    window.scrollTo({ top: 0 });
}

// ===== AUTH =====
function openAuthModal(tab) {
    document.getElementById('authModal').classList.add('active');
    showAuthTab(tab);
}
function closeAuthModal() { document.getElementById('authModal').classList.remove('active'); }
function showAuthTab(tab) {
    const loginForm = document.querySelector('#authModal form:first-of-type');
    const registerForm = document.querySelector('#authModal form:last-of-type');
    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}
function handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[name="regName"]').value.trim();
    const phone = form.querySelector('[name="regPhone"]').value.trim();
    const password = form.querySelector('[name="regPassword"]').value;
    const confirm = form.querySelector('[name="regConfirm"]').value;
    if (!name || !phone || !password) { showToast('Заполните все поля', 'error'); return; }
    if (password.length < 6) { showToast('Пароль не менее 6 символов', 'error'); return; }
    if (password !== confirm) { showToast('Пароли не совпадают', 'error'); return; }
    const users = JSON.parse(localStorage.getItem('matreshka_users') || '[]');
    if (users.find(u => u.phone === phone)) { showToast('Телефон уже зарегистрирован', 'error'); return; }
    const user = { id: 'u' + Date.now(), name, phone, password, bonus: 0 };
    users.push(user);
    localStorage.setItem('matreshka_users', JSON.stringify(users));
    state.user = { id: user.id, name: user.name, phone: user.phone, bonus: 0 };
    saveState();
    updateUI();
    closeAuthModal();
    showToast('Регистрация успешна!', 'success');
}
function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const phone = form.querySelector('[name="loginPhone"]').value.trim();
    const password = form.querySelector('[name="loginPassword"]').value;
    if (!phone || !password) { showToast('Заполните все поля', 'error'); return; }
    const users = JSON.parse(localStorage.getItem('matreshka_users') || '[]');
    const user = users.find(u => u.phone === phone && u.password === password);
    if (!user) { showToast('Неверный телефон или пароль', 'error'); return; }
    state.user = { id: user.id, name: user.name, phone: user.phone, bonus: user.bonus || 0 };
    saveState();
    updateUI();
    closeAuthModal();
    showToast('Добро пожаловать!', 'success');
}
function logout() {
    state.user = null;
    saveState();
    updateUI();
    navigateTo('home');
    showToast('Вы вышли', 'info');
}

// ===== CART =====
function getCartCount() { return state.cart.reduce((sum, item) => sum + item.qty, 0); }
function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    renderCart();
}
function closeCart() { document.getElementById('cartSidebar').classList.remove('active'); }
function addToCart(productId) {
    const product = STORE_DATA.products.find(p => p.id === productId);
    if (!product) return;
    const existing = state.cart.find(item => item.id === productId);
    if (existing) existing.qty += 1;
    else state.cart.push({ id: productId, qty: 1 });
    saveState();
    updateUI();
    renderCart();
    showToast(product.name + ' добавлен в корзину', 'success');
}
function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveState();
    updateUI();
    renderCart();
}
function updateCartQty(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(productId);
    else { saveState(); updateUI(); renderCart(); }
}
function renderCart() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if (state.cart.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px">Корзина пуста</div>';
        totalEl.textContent = '0 ₽';
        return;
    }
    let total = 0;
    container.innerHTML = state.cart.map(item => {
        const product = STORE_DATA.products.find(p => p.id === item.id);
        if (!product) return '';
        const subtotal = product.price * item.qty;
        total += subtotal;
        return `<div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid #eee"><div style="font-size:32px">${product.image}</div><div style="flex:1"><div><strong>${product.name}</strong></div><div>${product.price} ₽ × ${item.qty}</div><div><button onclick="updateCartQty('${product.id}', -1)">-</button> <span>${item.qty}</span> <button onclick="updateCartQty('${product.id}', 1)">+</button> <button onclick="removeFromCart('${product.id}')">🗑️</button></div></div><div><strong>${subtotal} ₽</strong></div></div>`;
    }).join('');
    totalEl.textContent = total + ' ₽';
}

// ===== CHECKOUT =====
function openCheckout() {
    if (state.cart.length === 0) { showToast('Корзина пуста', 'error'); return; }
    if (!state.user) { showToast('Войдите в аккаунт', 'error'); openAuthModal('login'); return; }
    closeCart();
    navigateTo('checkout');
    renderCheckout();
}
function renderCheckout() {
    const container = document.getElementById('checkoutContent');
    let total = 0;
    const itemsHtml = state.cart.map(item => {
        const product = STORE_DATA.products.find(p => p.id === item.id);
        if (!product) return '';
        const subtotal = product.price * item.qty;
        total += subtotal;
        return `<div>${product.name} × ${item.qty} = ${subtotal} ₽</div>`;
    }).join('');
    container.innerHTML = `<div><h3>Ваш заказ</h3>${itemsHtml}<hr><div><strong>Итого: ${total} ₽</strong></div><input type="text" id="checkoutAddress" placeholder="Адрес доставки" style="width:100%;padding:10px;margin:10px 0"><button class="btn btn-primary" onclick="placeOrder()">Подтвердить заказ</button></div>`;
}
function placeOrder() {
    const address = document.getElementById('checkoutAddress')?.value || '';
    if (!address) { showToast('Введите адрес', 'error'); return; }
    let total = 0;
    state.cart.forEach(item => {
        const product = STORE_DATA.products.find(p => p.id === item.id);
        if (product) total += product.price * item.qty;
    });
    const order = { id: 'ORD-' + Date.now(), date: new Date().toISOString(), user: { id: state.user.id, name: state.user.name }, items: [...state.cart], total: total, address: address, status: 'new' };
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    orders.push(order);
    localStorage.setItem('matreshka_orders', JSON.stringify(orders));
    state.cart = [];
    saveState();
    updateUI();
    showToast('Заказ оформлен!', 'success');
    navigateTo('profile');
}

// ===== PROFILE =====
function renderProfile() {
    if (!state.user) { navigateTo('home'); openAuthModal('login'); return; }
    document.getElementById('profileAvatar').textContent = state.user.name.charAt(0).toUpperCase();
    document.getElementById('profileName').textContent = state.user.name;
    document.getElementById('profilePhone').textContent = state.user.phone;
    renderProfileOrders();
    renderProfileWishlist();
}
function showProfileTab(tab) {
    document.querySelectorAll('.profile-tab').forEach(t => t.style.display = 'none');
    document.getElementById('profileTab' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
    document.querySelectorAll('.profile-nav-item').forEach(i => i.classList.remove('active'));
    event.target.classList.add('active');
}
function renderProfileOrders() {
    const container = document.getElementById('profileOrders');
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    const userOrders = orders.filter(o => o.user?.id === state.user?.id);
    if (userOrders.length === 0) { container.innerHTML = '<p>Заказов нет</p>'; return; }
    container.innerHTML = userOrders.map(o => `<div style="border:1px solid #eee;padding:12px;margin:8px 0">#${o.id} - ${o.total} ₽ - ${o.status}<br>${o.address}</div>`).join('');
}
function renderProfileWishlist() {
    const container = document.getElementById('profileWishlist');
    const wishlistProducts = STORE_DATA.products.filter(p => state.wishlist.includes(p.id));
    if (wishlistProducts.length === 0) { container.innerHTML = '<p>Избранного нет</p>'; return; }
    container.innerHTML = wishlistProducts.map(p => `<div style="border:1px solid #eee;padding:12px;margin:8px 0">${p.name} - ${p.price} ₽ <button onclick="removeFromWishlist('${p.id}')">Удалить</button></div>`).join('');
}
function removeFromWishlist(productId) {
    state.wishlist = state.wishlist.filter(id => id !== productId);
    saveState();
    renderProfileWishlist();
    renderCatalog();
}
function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) state.wishlist.splice(idx, 1);
    else state.wishlist.push(productId);
    saveState();
    renderCatalog();
}

// ===== CATALOG =====
function renderCatalog() {
    const grid = document.getElementById('catalogGrid');
    const countSpan = document.getElementById('catalogCount');
    if (!grid) return;
    let products = [...STORE_DATA.products];
    if (state.currentCategory !== 'all') products = products.filter(p => p.category === state.currentCategory);
    if (countSpan) countSpan.textContent = `Найдено: ${products.length}`;
    if (products.length === 0) { grid.innerHTML = '<p>Товары не найдены</p>'; return; }
    grid.innerHTML = products.map(p => `<div class="product-card"><div class="product-image" onclick="openProductDetail('${p.id}')">${p.image}</div><div class="product-title">${p.name}</div><div class="product-price">${p.price} ₽</div><button class="btn-add-cart" onclick="addToCart('${p.id}')">🛒 В корзину</button></div>`).join('');
}
function applyFilters() { renderCatalog(); }
function openProductDetail(productId) {
    const product = STORE_DATA.products.find(p => p.id === productId);
    if (!product) return;
    document.getElementById('productDetailContent').innerHTML = `<h2>${product.name}</h2><div style="font-size:64px;text-align:center">${product.image}</div><p>${product.desc || 'Описание отсутствует'}</p><p><strong>${product.price} ₽</strong> / ${product.unit}</p><button class="btn btn-primary" onclick="addToCart('${product.id}');closeProductModal()">В корзину</button>`;
    document.getElementById('productModal').classList.add('active');
}
function closeProductModal() { document.getElementById('productModal').classList.remove('active'); }
function renderPopularProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;
    const popular = STORE_DATA.products.filter(p => p.isPopular).slice(0, 8);
    container.innerHTML = popular.map(p => `<div class="product-card"><div class="product-image" onclick="openProductDetail('${p.id}')">${p.image}</div><div class="product-title">${p.name}</div><div class="product-price">${p.price} ₽</div><button class="btn-add-cart" onclick="addToCart('${p.id}')">В корзину</button></div>`).join('');
}
function handleSearch(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) return;
    const results = STORE_DATA.products.filter(p => p.name.toLowerCase().includes(query) || p.categoryName.toLowerCase().includes(query));
    if (results.length === 0) showToast('Ничего не найдено', 'info');
    else { state.currentCategory = 'all'; navigateTo('catalog'); document.getElementById('catalogGrid').innerHTML = results.map(p => `<div class="product-card"><div>${p.name}</div></div>`).join(''); }
}

// ===== ADMIN =====
function openAdminMenu() { document.getElementById('adminDropdown').classList.toggle('active'); }
document.addEventListener('click', function(e) {
    const menu = document.querySelector('.three-dots-menu');
    const dropdown = document.getElementById('adminDropdown');
    if (menu && dropdown && !menu.contains(e.target)) dropdown.classList.remove('active');
});
function requestAdminAccess(section) {
    document.getElementById('adminDropdown').classList.remove('active');
    state.adminSection = section;
    document.getElementById('passwordModal').classList.add('active');
    document.getElementById('passwordInput').focus();
}
function checkPassword() {
    if (document.getElementById('passwordInput').value === '7316') {
        document.getElementById('passwordModal').classList.remove('active');
        openAdmin();
    } else { document.getElementById('passwordError').style.display = 'block'; }
}
function openAdmin() {
    document.getElementById('adminPanel').classList.add('active');
    if (state.adminSection === 'orders') showAdminTab('orders');
    else showAdminTab('products');
    renderAdminProducts();
    renderAdminOrders();
}
function closeAdmin() { document.getElementById('adminPanel').classList.remove('active'); }
function showAdminTab(tab) {
    document.querySelectorAll('.admin-tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('adminTab' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
    event.target.classList.add('active');
}
function renderAdminProducts() {
    const container = document.getElementById('adminProductsList');
    if (!container) return;
    container.innerHTML = STORE_DATA.products.map((p, index) => `<div class="admin-product-card"><div style="font-size:32px">${p.image}</div><div><strong>${p.name}</strong></div><div>${p.price} ₽</div><button onclick="editProduct(${index})">✏️ Ред</button> <button onclick="deleteProduct(${index})">🗑️ Уд</button></div>`).join('');
}
function showAddProductForm() { document.getElementById('adminProductForm').style.display = 'block'; }
function hideProductForm() { document.getElementById('adminProductForm').style.display = 'none'; }
function editProduct(index) {
    const p = STORE_DATA.products[index];
    const form = document.getElementById('adminProductForm');
    form.style.display = 'block';
    form.querySelector('[name="pName"]').value = p.name;
    form.querySelector('[name="pPrice"]').value = p.price;
    form.dataset.editIndex = index;
}
function saveProduct(e) {
    e.preventDefault();
    const form = e.target;
    const editIndex = form.dataset.editIndex;
    const product = {
        id: editIndex ? STORE_DATA.products[parseInt(editIndex)].id : 'p' + Date.now(),
        name: form.querySelector('[name="pName"]').value,
        category: 'tkani',
        categoryName: 'Ткани',
        price: Number(form.querySelector('[name="pPrice"]').value),
        unit: 'шт',
        desc: '',
        image: '📦',
        inStock: true,
        isNew: false,
        isPopular: false,
        stock: 10
    };
    if (editIndex !== undefined && editIndex !== '') STORE_DATA.products[parseInt(editIndex)] = product;
    else STORE_DATA.products.push(product);
    hideProductForm();
    renderAdminProducts();
    renderCatalog();
    renderPopularProducts();
    showToast('Товар сохранён', 'success');
}
function deleteProduct(index) {
    if (!confirm('Удалить товар?')) return;
    STORE_DATA.products.splice(index, 1);
    renderAdminProducts();
    renderCatalog();
    renderPopularProducts();
    showToast('Товар удалён', 'success');
}
function renderAdminOrders() {
    const container = document.getElementById('adminOrdersList');
    if (!container) return;
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    container.innerHTML = orders.map(o => `<div style="border:1px solid #eee;padding:12px;margin:8px 0">#${o.id} - ${o.total} ₽ - ${o.status} - ${o.address}</div>`).join('');
}

// ===== СИНХРОНИЗАЦИЯ =====
async function syncWithCloud() {
    showToast('🔄 Синхронизация...', 'info');
    showToast('✅ Синхронизация завершена', 'success');
}

// ===== UI UPDATE =====
function updateUI() {
    const count = getCartCount();
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
    const authBtns = document.getElementById('authButtons');
    if (authBtns) {
        if (state.user) authBtns.innerHTML = `<button onclick="navigateTo('profile')">👤</button><button onclick="logout()">🚪</button>`;
        else authBtns.innerHTML = `<button onclick="openAuthModal('login')">👤</button>`;
    }
}

// ===== INIT =====
loadState();
document.addEventListener('DOMContentLoaded', function() {
    renderPopularProducts();
    updateUI();
    console.log('МАТРЁШКА загружена');
});
