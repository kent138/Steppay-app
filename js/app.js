// ===== STORE DATA =====
const STORE_DATA = {
    products: [
        { id: 'p1', name: 'Хлопок премиум', category: 'tkani', categoryName: 'Ткани', price: 890, unit: 'за метр', image: '🧵', composition: '100% хлопок', width: '150 см', density: '130 г/м²', care: 'Стирка при 30°C', color: 'Белый', type: 'Хлопок', inStock: true, isNew: true, isPopular: true, stock: 50, desc: 'Высококачественный хлопок премиум-класса. Идеален для пошива летних платьев, рубашек и детской одежды. Мягкий, дышащий, гипоаллергенный.' },
        { id: 'p2', name: 'Лён натуральный', category: 'tkani', categoryName: 'Ткани', price: 1200, unit: 'за метр', image: '🌾', composition: '100% лён', width: '140 см', density: '180 г/м²', care: 'Стирка при 40°C', color: 'Натуральный', type: 'Лён', inStock: true, isNew: false, isPopular: true, stock: 30, desc: 'Натуральный лён высшего сорта. Экологичный материал с уникальной текстурой. Подходит для пошива одежды, скатертей и домашнего текстиля.' },
        { id: 'p3', name: 'Шёлк натуральный', category: 'tkani', categoryName: 'Ткани', price: 2500, unit: 'за метр', image: '🦋', composition: '100% шёлк', width: '110 см', density: '60 г/м²', care: 'Химчистка', color: 'Слоновая кость', type: 'Шёлк', inStock: true, isNew: true, isPopular: false, stock: 15, desc: 'Изысканный натуральный шёлк. Благородный блеск и невероятная мягкость. Идеален для вечерних нарядов и аксессуаров.' },
        { id: 'p4', name: 'Шерсть мериноса', category: 'tkani', categoryName: 'Ткани', price: 1800, unit: 'за метр', image: '🐑', composition: '100% шерсть мериноса', width: '150 см', density: '220 г/м²', care: 'Химчистка', color: 'Серый', type: 'Шерсть', inStock: true, isNew: false, isPopular: true, stock: 20, desc: 'Тёплая и мягкая шерсть мериноса. Идеальна для осенних и зимних пальто, костюмов и пледов. Не колется, приятна к телу.' },
        { id: 'p5', name: 'Пуговицы деревянные', category: 'furnitura', categoryName: 'Фурнитура', price: 150, unit: 'за набор (10 шт)', image: '🪵', composition: 'Дуб', width: '—', density: '—', care: '—', color: 'Натуральный', type: 'Пуговицы', inStock: true, isNew: false, isPopular: true, stock: 100, desc: 'Набор деревянных пуговиц ручной работы. Каждая пуговица уникальна. Идеально подходят для пальто, кардиганов и сумок.' },
        { id: 'p6', name: 'Молния потайная', category: 'furnitura', categoryName: 'Фурнитура', price: 80, unit: 'за шт', image: '🤐', composition: 'Металл/Пластик', width: '—', density: '—', care: '—', color: 'Чёрный', type: 'Молнии', inStock: true, isNew: true, isPopular: false, stock: 200, desc: 'Потайная молния для юбок и платьев. Длина 50 см. Надёжный механизм, плавный ход. Доступна в разных цветах.' },
        { id: 'p7', name: 'Кружево хлопковое', category: 'furnitura', categoryName: 'Фурнитура', price: 350, unit: 'за метр', image: '🤍', composition: '100% хлопок', width: '5 см', density: '—', care: 'Ручная стирка', color: 'Белый', type: 'Кружево', inStock: true, isNew: false, isPopular: true, stock: 40, desc: 'Нежное хлопковое кружево ручной работы. Идеально для отделки платьев, блузок и белья. Ширина 5 см.' },
        { id: 'p8', name: 'Нитки полиэстер', category: 'furnitura', categoryName: 'Фурнитура', price: 60, unit: 'за катушку', image: '🧶', composition: '100% полиэстер', width: '—', density: '—', care: '—', color: 'Красный', type: 'Нитки', inStock: true, isNew: false, isPopular: false, stock: 500, desc: 'Прочные нитки из полиэстера. Длина 200 м. Подходят для всех видов тканей. Богатая цветовая палитра.' },
        { id: 'p9', name: 'Ножницы портновские', category: 'accessories', categoryName: 'Аксессуары', price: 1200, unit: 'за шт', image: '✂️', composition: 'Нержавеющая сталь', width: '—', density: '—', care: 'Протирать после использования', color: 'Серебристый', type: 'Инструменты', inStock: true, isNew: false, isPopular: true, stock: 25, desc: 'Профессиональные портновские ножницы из нержавеющей стали. Длина 25 см. Острые, удобные, с эргономичными ручками.' },
        { id: 'p10', name: 'Иглы для шитья', category: 'accessories', categoryName: 'Аксессуары', price: 200, unit: 'за набор (20 шт)', image: '🪡', composition: 'Сталь', width: '—', density: '—', care: '—', color: 'Серебристый', type: 'Иглы', inStock: true, isNew: false, isPopular: false, stock: 100, desc: 'Набор игл для ручного шитья разных размеров. Подходят для всех видов тканей. Острые, прочные, с удобным ушком.' },
        { id: 'p11', name: 'Сантиметровая лента', category: 'accessories', categoryName: 'Аксессуары', price: 80, unit: 'за шт', image: '📏', composition: 'Пластик', width: '—', density: '—', care: '—', color: 'Разноцветный', type: 'Инструменты', inStock: true, isNew: false, isPopular: false, stock: 150, desc: 'Мягкая сантиметровая лента для снятия мерок. Длина 150 см. Двусторонняя шкала: см и дюймы.' },
        { id: 'p12', name: 'Хлопок с принтом', category: 'tkani', categoryName: 'Ткани', price: 950, unit: 'за метр', image: '🌸', composition: '100% хлопок', width: '150 см', density: '125 г/м²', care: 'Стирка при 30°C', color: 'Розовый', type: 'Хлопок', inStock: true, isNew: true, isPopular: true, stock: 35, desc: 'Хлопок с нежным цветочным принтом. Идеален для летних сарафанов, детской одежды и постельного белья.' },
        { id: 'p13', name: 'Фетр цветной', category: 'tkani', categoryName: 'Ткани', price: 450, unit: 'за лист (А4)', image: '🎨', composition: '100% полиэстер', width: '—', density: '200 г/м²', care: 'Ручная стирка', color: 'Ассорти', type: 'Фетр', inStock: true, isNew: false, isPopular: false, stock: 60, desc: 'Цветной фетр для рукоделия. Мягкий, хорошо держит форму. Подходит для аппликаций, игрушек и декора.' },
        { id: 'p14', name: 'Бисер чешский', category: 'furnitura', categoryName: 'Фурнитура', price: 120, unit: 'за пакетик (10 г)', image: '💎', composition: 'Стекло', width: '—', density: '—', care: '—', color: 'Золотой', type: 'Бисер', inStock: true, isNew: false, isPopular: false, stock: 80, desc: 'Качественный чешский бисер. Ровный, калиброванный. Идеален для вышивки и создания украшений.' },
        { id: 'p15', name: 'Пяльцы для вышивания', category: 'accessories', categoryName: 'Аксессуары', price: 350, unit: 'за шт', image: '🟤', composition: 'Дерево', width: '—', density: '—', care: '—', color: 'Натуральный', type: 'Инструменты', inStock: true, isNew: false, isPopular: false, stock: 40, desc: 'Деревянные пяльцы для вышивания. Диаметр 20 см. Удобный винтовой зажим для регулировки натяжения ткани.' },
        { id: 'p16', name: 'Ткань костюмная', category: 'tkani', categoryName: 'Ткани', price: 1500, unit: 'за метр', image: '👔', composition: '45% шерсть, 55% полиэстер', width: '150 см', density: '240 г/м²', care: 'Химчистка', color: 'Тёмно-синий', type: 'Костюмная', inStock: true, isNew: false, isPopular: true, stock: 25, desc: 'Классическая костюмная ткань. Практичная, мало мнётся, хорошо держит форму. Идеальна для деловых костюмов и брюк.' }
    ],
    categories: [
        { id: 'tkani', name: 'Ткани', icon: '🧵' },
        { id: 'furnitura', name: 'Фурнитура', icon: '🪡' },
        { id: 'accessories', name: 'Аксессуары', icon: '✂️' }
    ],
    faq: [
        { q: 'Как оформить заказ?', a: 'Выберите товары в каталоге, добавьте их в корзину, перейдите к оформлению заказа, заполните данные для доставки и выберите способ оплаты.' },
        { q: 'Какие способы оплаты доступны?', a: 'Мы принимаем наличные при получении, онлайн-оплату картой МИР и оплату через СБП (Система быстрых платежей).' },
        { q: 'Как осуществляется доставка?', a: 'Мы отправляем заказы Почтой России и СДЭК. Сроки доставки зависят от региона: от 1-2 дней по Чите до 7-14 дней в отдалённые регионы.' },
        { q: 'Есть ли бесплатная доставка?', a: 'Да, при заказе от 5 000 ₽ доставка по России бесплатная!' },
        { q: 'Как вернуть товар?', a: 'Вы можете вернуть ткань в течение 14 дней, если она не была разрезана. Фурнитура возврату не подлежит. Подробнее в разделе "Возврат и обмен".' },
        { q: 'Можно ли заказать отрез нужной длины?', a: 'Да, вы можете заказать ткань любой длины от 0,5 метра. Цена указана за 1 метр.' },
        { q: 'Как узнать о новинках?', a: 'Подпишитесь на нашу рассылку на главной странице или следите за новостями в блоге.' },
        { q: 'Работаете ли вы с юридическими лицами?', a: 'Да, мы работаем с ИП и юридическими лицами. Для оформления заказа свяжитесь с нами по телефону.' }
    ]
};

// ===== ОБЛАЧНОЕ ХРАНИЛИЩЕ JSONBin.io =====
const BIN_ID = '6a2cfb00da38895dfeb90e82';
const API_KEY = '$2a$10$5McJfpcFUclQsaTwtdmbteWHlI8hMm3iH.7lfkPVnomXp5SjikLNW';
const API_BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
const DEFAULT_PRODUCT_IDS = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14','p15','p16'];

// ===== ЗАГРУЗКА ТОВАРОВ ИЗ ОБЛАКА =====
async function loadCustomProducts() {
    try {
        const response = await fetch(API_BASE_URL, {
            headers: { 'X-Master-Key': API_KEY }
        });
        if (response.ok) {
            const data = await response.json();
            const cloudProducts = data.record?.products || [];
            if (cloudProducts.length > 0) {
                const defaultIds = DEFAULT_PRODUCT_IDS;
                STORE_DATA.products = STORE_DATA.products.filter(p => defaultIds.includes(p.id));
                cloudProducts.forEach(p => {
                    if (!defaultIds.includes(p.id)) {
                        STORE_DATA.products.push(p);
                    }
                });
                console.log('☁️ Загружено товаров из облака:', cloudProducts.length);
            }
        }
    } catch (e) {
        console.warn('☁️ Ошибка загрузки:', e.message);
    }
    try {
        const saved = localStorage.getItem('matreshka_products');
        if (saved) {
            const customProducts = JSON.parse(saved);
            const defaultIds = DEFAULT_PRODUCT_IDS;
            customProducts.forEach(p => {
                if (!defaultIds.includes(p.id)) {
                    STORE_DATA.products.push(p);
                }
            });
            console.log('💾 Загружено из localStorage:', customProducts.length);
        }
    } catch (e) {}
}

// ===== СОХРАНЕНИЕ ТОВАРОВ В ОБЛАКО =====
async function saveCustomProducts() {
    const customProducts = STORE_DATA.products.filter(p => !DEFAULT_PRODUCT_IDS.includes(p.id));
    localStorage.setItem('matreshka_products', JSON.stringify(customProducts));
    try {
        const response = await fetch(API_BASE_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY
            },
            body: JSON.stringify({ products: customProducts })
        });
        if (response.ok) {
            console.log('☁️ Сохранено в облако:', customProducts.length);
        }
    } catch (e) {
        console.warn('☁️ Ошибка сохранения:', e.message);
    }
}

// ===== СОСТОЯНИЕ =====
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

// ===== НАВИГАЦИЯ =====
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    const target = document.getElementById('page' + page.charAt(0).toUpperCase() + page.slice(1));
    if (target) {
        target.style.display = 'block';
        state.currentPage = page;
    }
    document.querySelectorAll('.nav-list a').forEach(a => {
        a.classList.toggle('active', a.dataset.page === page);
    });
    closeCart();
    closeAuthModal();
    if (page === 'catalog') renderCatalog();
    if (page === 'profile') renderProfile();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== АВТОРИЗАЦИЯ =====
function openAuthModal(tab) {
    document.getElementById('authModal').classList.add('active');
    showAuthTab(tab);
}
function closeAuthModal() { document.getElementById('authModal').classList.remove('active'); }
function showAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');
    tabs.forEach(t => {
        t.style.background = t.dataset.tab === tab ? 'var(--primary)' : 'var(--gray-100)';
        t.style.color = t.dataset.tab === tab ? 'var(--white)' : 'var(--gray-700)';
    });
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
    const user = { id: 'u' + Date.now(), name, phone, password, bonus: 0, addresses: [] };
    users.push(user);
    localStorage.setItem('matreshka_users', JSON.stringify(users));
    state.user = { id: user.id, name: user.name, phone: user.phone, bonus: user.bonus, addresses: user.addresses };
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
    state.user = { id: user.id, name: user.name, phone: user.phone, bonus: user.bonus || 0, addresses: user.addresses || [] };
    saveState();
    updateUI();
    closeAuthModal();
    showToast('Добро пожаловать, ' + user.name + '!', 'success');
}
function logout() {
    state.user = null;
    saveState();
    updateUI();
    navigateTo('home');
    showToast('Вы вышли', 'info');
}

// ===== КОРЗИНА =====
function getCartCount() { return state.cart.reduce((sum, item) => sum + item.qty, 0); }
function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').style.display = 'block';
    renderCart();
}
function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').style.display = 'none';
}
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
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray-500)"><div style="font-size:48px">🛒</div><p>Корзина пуста</p></div>';
        totalEl.textContent = '0 ₽';
        return;
    }
    let total = 0;
    container.innerHTML = state.cart.map(item => {
        const product = STORE_DATA.products.find(p => p.id === item.id);
        if (!product) return '';
        const subtotal = product.price * item.qty;
        total += subtotal;
        return `<div class="cart-item"><div class="cart-item-image">${product.image}</div><div class="cart-item-info"><div class="cart-item-title">${product.name}</div><div class="cart-item-price">${subtotal} ₽</div><div class="cart-item-actions"><button class="cart-qty-btn" onclick="updateCartQty('${product.id}', -1)">−</button><span class="cart-qty">${item.qty}</span><button class="cart-qty-btn" onclick="updateCartQty('${product.id}', 1)">+</button><button class="cart-item-remove" onclick="removeFromCart('${product.id}')">🗑️</button></div></div></div>`;
    }).join('');
    totalEl.textContent = total.toLocaleString() + ' ₽';
}

// ===== ОФОРМЛЕНИЕ ЗАКАЗА =====
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
        return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--gray-100)"><span>${product.image} ${product.name} × ${item.qty}</span><span>${subtotal} ₽</span></div>`;
    }).join('');
    const freeDelivery = total >= 5000;
    container.innerHTML = `<div class="checkout-layout"><div><div class="checkout-section"><h3>Состав заказа</h3>${itemsHtml}<div style="display:flex;justify-content:space-between;padding:16px 0;font-size:20px;font-weight:800"><span>Итого:</span><span style="color:var(--primary)">${total} ₽</span></div><div>${freeDelivery ? 'Бесплатная доставка!' : 'Доставка от 300 ₽ (бесплатно от 5000 ₽)'}</div></div><div class="checkout-section"><h3>Адрес доставки</h3><input type="text" id="checkoutCity" placeholder="Город" value="Чита"><input type="text" id="checkoutStreet" placeholder="Улица"><input type="text" id="checkoutHouse" placeholder="Дом"></div><div class="checkout-section"><h3>Способ оплаты</h3><label><input type="radio" name="paymentMethod" value="cash" checked> Наличные</label><label><input type="radio" name="paymentMethod" value="mir"> Карта МИР</label><label><input type="radio" name="paymentMethod" value="sbp"> СБП</label></div></div><div><div class="checkout-section"><h3>Подтверждение</h3><button class="btn btn-primary" onclick="placeOrder()">Подтвердить заказ</button></div></div></div>`;
}
function placeOrder() {
    const street = document.getElementById('checkoutStreet')?.value || '';
    const house = document.getElementById('checkoutHouse')?.value || '';
    if (!street || !house) { showToast('Заполните адрес', 'error'); return; }
    let total = 0;
    state.cart.forEach(item => {
        const product = STORE_DATA.products.find(p => p.id === item.id);
        if (product) total += product.price * item.qty;
    });
    const order = { id: 'ORD-' + Date.now(), date: new Date().toISOString(), user: { id: state.user.id, name: state.user.name, phone: state.user.phone }, items: [...state.cart], total: total, status: 'new' };
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    orders.push(order);
    localStorage.setItem('matreshka_orders', JSON.stringify(orders));
    state.cart = [];
    saveState();
    updateUI();
    showToast('Заказ оформлен!', 'success');
    navigateTo('profile');
}

// ===== ПРОФИЛЬ =====
function renderProfile() {
    if (!state.user) { navigateTo('home'); openAuthModal('login'); return; }
    document.getElementById('profileAvatar').textContent = state.user.name.charAt(0).toUpperCase();
    document.getElementById('profileName').textContent = state.user.name;
    document.getElementById('profilePhone').textContent = state.user.phone;
    document.getElementById('profileBonus').textContent = state.user.bonus || 0;
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    const userOrders = orders.filter(o => o.user?.id === state.user?.id);
    const container = document.getElementById('profileOrders');
    if (userOrders.length === 0) container.innerHTML = '<p>Заказов нет</p>';
    else container.innerHTML = userOrders.map(o => `<div>#${o.id} - ${o.total} ₽ - ${o.status}</div>`).join('');
}
function showProfileTab(tab) {
    document.querySelectorAll('.profile-tab').forEach(t => t.style.display = 'none');
    document.getElementById('profileTab' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
}
function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) state.wishlist.splice(idx, 1);
    else state.wishlist.push(productId);
    saveState();
    renderCatalog();
}

// ===== КАТАЛОГ =====
function renderCatalog() {
    const grid = document.getElementById('catalogGrid');
    const count = document.getElementById('catalogCount');
    if (!grid) return;
    let products = [...STORE_DATA.products];
    if (state.currentCategory && state.currentCategory !== 'all') products = products.filter(p => p.category === state.currentCategory);
    count.textContent = 'Найдено: ' + products.length;
    if (products.length === 0) { grid.innerHTML = '<p>Товары не найдены</p>'; return; }
    grid.innerHTML = products.map(p => `<div class="product-card"><div class="product-image" onclick="openProductDetail('${p.id}')">${p.image}</div><div class="product-info"><div class="product-title">${p.name}</div><div class="product-price">${p.price} ₽</div><button class="btn-add-cart" onclick="addToCart('${p.id}')">В корзину</button></div></div>`).join('');
}
function applyFilters() { renderCatalog(); }
function openProductDetail(productId) {
    const product = STORE_DATA.products.find(p => p.id === productId);
    if (!product) return;
    document.getElementById('productDetailContent').innerHTML = `<h2>${product.name}</h2><p>${product.price} ₽</p><p>${product.desc}</p><button onclick="addToCart('${product.id}')">В корзину</button>`;
    document.getElementById('productModal').classList.add('active');
}
function closeProductModal() { document.getElementById('productModal').classList.remove('active'); }
function renderPopularProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;
    const popular = STORE_DATA.products.filter(p => p.isPopular).slice(0, 8);
    container.innerHTML = popular.map(p => `<div class="product-card"><div class="product-image" onclick="openProductDetail('${p.id}')">${p.image}</div><div class="product-info"><div class="product-title">${p.name}</div><div class="product-price">${p.price} ₽</div><button onclick="addToCart('${p.id}')">В корзину</button></div></div>`).join('');
}
function renderFAQ() {
    const container = document.getElementById('faqList');
    if (!container) return;
    container.innerHTML = STORE_DATA.faq.map((item, i) => `<div><strong>${item.q}</strong><p>${item.a}</p></div>`).join('');
}
function handleSearch(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) return;
    const results = STORE_DATA.products.filter(p => p.name.toLowerCase().includes(query));
    if (results.length === 0) showToast('Ничего не найдено', 'info');
    else { state.currentCategory = 'all'; navigateTo('catalog'); document.getElementById('catalogGrid').innerHTML = results.map(p => `<div>${p.name}</div>`).join(''); }
}
function calculateDelivery() {
    const total = parseFloat(document.getElementById('calcTotal')?.value) || 0;
    const result = document.getElementById('deliveryResult');
    if (total >= 5000) result.innerHTML = '<p>Бесплатная доставка!</p>';
    else result.innerHTML = '<p>Стоимость доставки от 300 ₽</p>';
}
function toggleChat() { document.getElementById('chatWindow').classList.toggle('active'); }
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    document.getElementById('chatMessages').innerHTML += '<div class="chat-msg user">' + text + '</div>';
    input.value = '';
    setTimeout(() => { document.getElementById('chatMessages').innerHTML += '<div class="chat-msg support">Спасибо, мы ответим вам в ближайшее время!</div>'; }, 1000);
}

// ===== АДМИНКА =====
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
    document.querySelector(`.admin-tab[data-admin-tab="${tab}"]`).classList.add('active');
}
function renderAdminProducts() {
    const container = document.getElementById('adminProductsList');
    if (!container) return;
    container.innerHTML = STORE_DATA.products.map((p, index) => `<div><strong>${p.name}</strong> - ${p.price} ₽ <button onclick="editProduct(${index})">Ред</button> <button onclick="deleteProduct(${index})">Уд</button></div>`).join('');
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
        unit: 'за шт',
        desc: '',
        image: '📦',
        composition: '—',
        width: '—',
        density: '—',
        care: '—',
        color: '—',
        type: '—',
        stock: 10,
        inStock: true,
        isNew: false,
        isPopular: false
    };
    if (editIndex) STORE_DATA.products[parseInt(editIndex)] = product;
    else STORE_DATA.products.push(product);
    saveCustomProducts();
    hideProductForm();
    renderAdminProducts();
    renderCatalog();
    renderPopularProducts();
    showToast('Товар сохранён', 'success');
}
function deleteProduct(index) {
    if (!confirm('Удалить?')) return;
    STORE_DATA.products.splice(index, 1);
    saveCustomProducts();
    renderAdminProducts();
    renderCatalog();
    renderPopularProducts();
}
function renderAdminOrders() {
    const container = document.getElementById('adminOrdersList');
    if (!container) return;
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    container.innerHTML = orders.map(o => `<div>#${o.id} - ${o.total} ₽ - ${o.status}</div>`).join('');
}
function updateOrderStatus(orderId, newStatus) {
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    const order = orders.find(o => o.id === orderId);
    if (order) { order.status = newStatus; localStorage.setItem('matreshka_orders', JSON.stringify(orders)); renderAdminOrders(); }
}
function deleteOrder(orderId) {
    if (!confirm('Удалить заказ?')) return;
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    localStorage.setItem('matreshka_orders', JSON.stringify(orders.filter(o => o.id !== orderId)));
    renderAdminOrders();
}
function filterAdminOrders() { renderAdminOrders(); }
function exportOrders() { alert('Экспорт заказов'); }

// ===== СИНХРОНИЗАЦИЯ =====
async function syncWithCloud() {
    showToast('Синхронизация...', 'info');
    await loadCustomProducts();
    renderCatalog();
    renderPopularProducts();
    if (document.getElementById('adminProductsList')) renderAdminProducts();
    showToast('Синхронизация завершена', 'success');
}

// ===== UI ОБНОВЛЕНИЕ =====
function updateUI() {
    const count = getCartCount();
    document.querySelectorAll('.cart-badge').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
    const authBtns = document.getElementById('authButtons');
    if (state.user) authBtns.innerHTML = `<button onclick="navigateTo('profile')">👤</button><button onclick="logout()">🚪</button>`;
    else authBtns.innerHTML = `<button onclick="openAuthModal('login')">👤</button>`;
}
function applyLogo(url) {
    if (!url) return;
    const logoImg = document.getElementById('logoImg');
    if (logoImg) { logoImg.src = url; logoImg.style.display = 'block'; document.getElementById('logoSvg').style.display = 'none'; }
}

// ===== ЗАПУСК =====
loadState();
(async function initApp() {
    await loadCustomProducts();
    document.addEventListener('DOMContentLoaded', function() {
        renderPopularProducts();
        renderFAQ();
        updateUI();
        if (!localStorage.getItem('matreshka_logo')) localStorage.setItem('matreshka_logo', 'https://s3.radikal.cloud/2026/06/12/i-171370a0c13fcb6db.webp');
        console.log('МАТРЁШКА загружена, товаров:', STORE_DATA.products.length);
    });
})();
