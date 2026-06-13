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
        { q: 'Как вернуть товар?', a: 'Вы можете вернуть ткань в течение 14 дней, если она не была разрезана. Фурнитура возврату не подлежит. Подробнее в разделе \\\"Возврат и обмен\\\".' },
        { q: 'Можно ли заказать отрез нужной длины?', a: 'Да, вы можете заказать ткань любой длины от 0,5 метра. Цена указана за 1 метр.' },
        { q: 'Как узнать о новинках?', a: 'Подпишитесь на нашу рассылку на главной странице или следите за новостями в блоге.' },
        { q: 'Работаете ли вы с юридическими лицами?', a: 'Да, мы работаем с ИП и юридическими лицами. Для оформления заказа свяжитесь с нами по телефону.' }
    ]
};

// ===== CLOUD API =====
// ===== ОБЛАЧНОЕ ХРАНИЛИЩЕ JSONBin.io
 =====
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
                // Сохраняем только стандартные товары
                const defaultIds = DEFAULT_PRODUCT_IDS;
                STORE_DATA.products = STORE_DATA.products.filter(p => defaultIds.includes(p.id));
                
                // Добавляем товары из облака
                cloudProducts.forEach(p => {
                    if (!defaultIds.includes(p.id)) {
                        STORE_DATA.products.push(p);
                    }
                });
                
                console.log('☁️ Загружено товаров из облака:', cloudProducts.length);
                return;
            }
        } else {
            console.warn('Ошибка загрузки из облака:', response.status);
        }
    } catch (e) {
        console.warn('☁️ Ошибка соединения с облаком:', e.message);
    }
    
    // Если облако не доступно, загружаем из localStorage (резерв)
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
            console.log('💾 Загружено из localStorage (резерв):', customProducts.length);
        }
    } catch (e) {
        console.warn('Ошибка загрузки из localStorage:', e);
    }
}

// ===== СОХРАНЕНИЕ ТОВАРОВ В ОБЛАКО =====
async function saveCustomProducts() {
    // Получаем только добавленные товары (не стандартные)
    const customProducts = STORE_DATA.products.filter(p => !DEFAULT_PRODUCT_IDS.includes(p.id));
    
    // Сохраняем резервную копию в localStorage
    localStorage.setItem('matreshka_products', JSON.stringify(customProducts));
    
    // Сохраняем в облако
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
            console.log('☁️ Сохранено в облако:', customProducts.length, 'товаров');
        } else {
            console.warn('Ошибка сохранения в облако:', response.status);
        }
    } catch (e) {
        console.warn('☁️ Ошибка сохранения в облако:', e.message);
    }
}
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

// Load state from localStorage
function loadState() {
    try {
        const savedUser = localStorage.getItem('matreshka_user');
        if (savedUser) state.user = JSON.parse(savedUser);
        const savedCart = localStorage.getItem('matreshka_cart');
        if (savedCart) state.cart = JSON.parse(savedCart);
        const savedWishlist = localStorage.getItem('matreshka_wishlist');
        if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);
    } catch (e) {
        console.warn('Error loading state:', e);
    }
}

function saveState() {
    localStorage.setItem('matreshka_user', JSON.stringify(state.user));
    localStorage.setItem('matreshka_cart', JSON.stringify(state.cart));
    localStorage.setItem('matreshka_wishlist', JSON.stringify(state.wishlist));
}

// ===== NAVIGATION =====
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

// ===== TOAST =====
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

// ===== AUTH =====
function openAuthModal(tab) {
    document.getElementById('authModal').classList.add('active');
    showAuthTab(tab);
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
}

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
    if (!name || !phone || !password) {
        showToast('Пожалуйста, заполните все поля', 'error');
        return;
    }
    if (password.length < 6) {
        showToast('Пароль должен быть не менее 6 символов', 'error');
        return;
    }
    if (password !== confirm) {
        showToast('Пароли не совпадают', 'error');
        return;
    }
    const users = JSON.parse(localStorage.getItem('matreshka_users') || '[]');
    if (users.find(u => u.phone === phone)) {
        showToast('Пользователь с таким телефоном уже зарегистрирован', 'error');
        return;
    }
    const user = { id: 'u' + Date.now(), name, phone, password, bonus: 0, addresses: [] };
    users.push(user);
    localStorage.setItem('matreshka_users', JSON.stringify(users));
    state.user = { id: user.id, name: user.name, phone: user.phone, bonus: user.bonus, addresses: user.addresses };
    saveState();
    updateUI();
    closeAuthModal();
    showToast('Регистрация успешна! Добро пожаловать, ' + name + '!', 'success');
}

function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const phone = form.querySelector('[name="loginPhone"]').value.trim();
    const password = form.querySelector('[name="loginPassword"]').value;
    if (!phone || !password) {
        showToast('Пожалуйста, заполните все поля', 'error');
        return;
    }
    const users = JSON.parse(localStorage.getItem('matreshka_users') || '[]');
    const user = users.find(u => u.phone === phone && u.password === password);
    if (!user) {
        showToast('Неверный телефон или пароль', 'error');
        return;
    }
    state.user = { id: user.id, name: user.name, phone: user.phone, bonus: user.bonus || 0, addresses: user.addresses || [] };
    saveState();
    updateUI();
    closeAuthModal();
    showToast('С возвращением, ' + user.name + '!', 'success');
}

function logout() {
    state.user = null;
    saveState();
    updateUI();
    navigateTo('home');
    showToast('Вы вышли из аккаунта', 'info');
}

// ===== CART =====
function getCartCount() {
    return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

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
    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.push({ id: productId, qty: 1 });
    }
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
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    saveState();
    updateUI();
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if (state.cart.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray-500)"><div style="font-size:48px;margin-bottom:16px">🛒</div><p>Корзина пуста</p></div>';
        totalEl.textContent = '0 ₽';
        return;
    }
    let total = 0;
    container.innerHTML = state.cart.map(item => {
        const product = STORE_DATA.products.find(p => p.id === item.id);
        if (!product) return '';
        const subtotal = product.price * item.qty;
        total += subtotal;
        return `
            <div class="cart-item">
                <div class="cart-item-image">${product.image}</div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${product.name}</div>
                    <div class="cart-item-price">${subtotal.toLocaleString()} ₽</div>
                    <div class="cart-item-actions">
                        <button class="cart-qty-btn" onclick="updateCartQty('${product.id}', -1)">−</button>
                        <span class="cart-qty">${item.qty}</span>
                        <button class="cart-qty-btn" onclick="updateCartQty('${product.id}', 1)">+</button>
                        <button class="cart-item-remove" onclick="removeFromCart('${product.id}')">🗑️</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    totalEl.textContent = total.toLocaleString() + ' ₽';
}

// ===== CHECKOUT =====
function openCheckout() {
    if (state.cart.length === 0) {
        showToast('Корзина пуста', 'error');
        return;
    }
    if (!state.user) {
        showToast('Пожалуйста, войдите в аккаунт', 'error');
        openAuthModal('login');
        return;
    }
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
        return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--gray-100)">
            <span>${product.image} ${product.name} × ${item.qty}</span>
            <span style="font-weight:600">${subtotal.toLocaleString()} ₽</span>
        </div>`;
    }).join('');
    const freeDelivery = total >= 5000;
    container.innerHTML = `
        <div class="checkout-layout">
            <div>
                <div class="checkout-section">
                    <h3>📋 Состав заказа</h3>
                    ${itemsHtml}
                    <div style="display:flex;justify-content:space-between;padding:16px 0;font-size:20px;font-weight:800;border-top:2px solid var(--gray-200);margin-top:8px">
                        <span>Итого:</span>
                        <span style="color:var(--primary)">${total.toLocaleString()} ₽</span>
                    </div>
                    <div style="font-size:14px;color:var(--gray-500);margin-top:8px">
                        ${freeDelivery ? '🎉 <strong style="color:var(--success)">Бесплатная доставка!</strong> (при заказе от 5 000 ₽)' : '🚚 Доставка от 300 ₽ (бесплатно от 5 000 ₽)'}
                    </div>
                </div>
                <div class="checkout-section">
                    <h3>📍 Адрес доставки</h3>
                    <div class="form-group">
                        <label>Город</label>
                        <input type="text" id="checkoutCity" placeholder="Город доставки" value="Чита">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Улица</label>
                            <input type="text" id="checkoutStreet" placeholder="Улица">
                        </div>
                        <div class="form-group">
                            <label>Дом/Квартира</label>
                            <input type="text" id="checkoutHouse" placeholder="Дом, кв.">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Индекс</label>
                        <input type="text" id="checkoutIndex" placeholder="Индекс">
                    </div>
                </div>
                <div class="checkout-section">
                    <h3>🚚 Способ доставки</h3>
                    <div class="payment-options">
                        <label class="payment-option selected">
                            <input type="radio" name="deliveryMethod" value="pochta" checked>
                            <span>📮 Почта России — от 300 ₽ (3-14 дней)</span>
                        </label>
                        <label class="payment-option">
                            <input type="radio" name="deliveryMethod" value="sdek">
                            <span>📦 СДЭК — от 400 ₽ (2-7 дней)</span>
                        </label>
                    </div>
                </div>
                <div class="checkout-section">
                    <h3>💳 Способ оплаты</h3>
                    <div class="payment-options">
                        <label class="payment-option selected">
                            <input type="radio" name="paymentMethod" value="cash" checked>
                            <span>💵 Наличные при получении</span>
                        </label>
                        <label class="payment-option">
                            <input type="radio" name="paymentMethod" value="mir">
                            <span>💳 Карта МИР</span>
                        </label>
                        <label class="payment-option">
                            <input type="radio" name="paymentMethod" value="sbp">
                            <span>📱 СБП (Система быстрых платежей)</span>
                        </label>
                    </div>
                </div>
                <div class="checkout-section">
                    <h3>📝 Комментарий к заказу</h3>
                    <div class="form-group">
                        <textarea id="checkoutComment" placeholder="Пожелания к заказу..." rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <div class="checkout-section" style="position:sticky;top:150px">
                    <h3>✅ Подтверждение заказа</h3>
                    <div style="margin-bottom:16px">
                        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
                            <span>Товары (${getCartCount()} шт.)</span>
                            <span style="font-weight:600">${total.toLocaleString()} ₽</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;margin-bottom:8px;color:var(--gray-500)">
                            <span>Доставка</span>
                            <span>${freeDelivery ? 'Бесплатно' : 'от 300 ₽'}</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:800;border-top:2px solid var(--gray-200);padding-top:12px">
                            <span>К оплате:</span>
                            <span style="color:var(--primary)">${total.toLocaleString()} ₽</span>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-full" onclick="placeOrder()" style="font-size:18px;padding:16px">
                        ✅ Подтвердить заказ
                    </button>
                    <p style="text-align:center;font-size:13px;color:var(--gray-500);margin-top:12px">
                        Нажимая кнопку, вы соглашаетесь с условиями обработки данных
                    </p>
                </div>
            </div>
        </div>
    `;
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.addEventListener('click', function() {
            this.querySelector('input[type="radio"]').checked = true;
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

function placeOrder() {
    const city = document.getElementById('checkoutCity')?.value || 'Чита';
    const street = document.getElementById('checkoutStreet')?.value || '';
    const house = document.getElementById('checkoutHouse')?.value || '';
    const index = document.getElementById('checkoutIndex')?.value || '';
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked')?.value || 'pochta';
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'cash';
    const comment = document.getElementById('checkoutComment')?.value || '';
    if (!street || !house) {
        showToast('Пожалуйста, заполните адрес доставки', 'error');
        return;
    }
    let total = 0;
    state.cart.forEach(item => {
        const product = STORE_DATA.products.find(p => p.id === item.id);
        if (product) total += product.price * item.qty;
    });
    const order = {
        id: 'ORD-' + Date.now(),
        date: new Date().toISOString(),
        user: { id: state.user.id, name: state.user.name, phone: state.user.phone },
        items: [...state.cart],
        total: total,
        address: { city, street, house, index },
        deliveryMethod: deliveryMethod === 'pochta' ? 'Почта России' : 'СДЭК',
        paymentMethod: paymentMethod === 'cash' ? 'Наличные' : paymentMethod === 'mir' ? 'Карта МИР' : 'СБП',
        comment: comment,
        status: 'new'
    };
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    orders.push(order);
    localStorage.setItem('matreshka_orders', JSON.stringify(orders));
    state.cart = [];
    saveState();
    updateUI();
    showToast('✅ Заказ #' + order.id + ' оформлен!', 'success');
    navigateTo('profile');
    renderProfile();
}

// ===== PROFILE =====
function renderProfile() {
    if (!state.user) {
        navigateTo('home');
        openAuthModal('login');
        return;
    }
    document.getElementById('profileAvatar').textContent = state.user.name.charAt(0).toUpperCase();
    document.getElementById('profileName').textContent = state.user.name;
    document.getElementById('profilePhone').textContent = state.user.phone;
    document.getElementById('profileBonus').textContent = state.user.bonus || 0;
    renderProfileOrders();
    renderProfileWishlist();
    renderProfileAddresses();
}

function showProfileTab(tab) {
    document.querySelectorAll('.profile-tab').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.profile-nav-item').forEach(i => i.classList.remove('active'));
    const tabMap = { orders: 'profileTabOrders', wishlist: 'profileTabWishlist', addresses: 'profileTabAddresses', settings: 'profileTabSettings' };
    const el = document.getElementById(tabMap[tab]);
    if (el) el.style.display = 'block';
    document.querySelector(`.profile-nav-item[data-profile-tab="${tab}"]`)?.classList.add('active');
}

function renderProfileOrders() {
    const container = document.getElementById('profileOrders');
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    const userOrders = orders.filter(o => o.user?.id === state.user?.id);
    if (userOrders.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray-500)"><div style="font-size:48px;margin-bottom:16px">📋</div><p>У вас пока нет заказов</p></div>';
        return;
    }
    const statusLabels = { new: 'Новый', processing: 'В обработке', shipped: 'Отправлен', delivered: 'Доставлен', cancelled: 'Отменён' };
    container.innerHTML = `
        <table class="orders-table">
            <thead>
                <tr>
                    <th>№ Заказа</th>
                    <th>Дата</th>
                    <th>Товары</th>
                    <th>Сумма</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                ${userOrders.reverse().map(o => `
                    <tr>
                        <td style="font-weight:600">#${o.id}</td>
                        <td>${new Date(o.date).toLocaleDateString('ru-RU')}</td>
                        <td>${o.items.map(i => {
                            const p = STORE_DATA.products.find(pr => pr.id === i.id);
                            return p ? p.name + ' × ' + i.qty : 'Товар × ' + i.qty;
                        }).join(', ')}</td>
                        <td style="font-weight:700;color:var(--primary)">${o.total.toLocaleString()} ₽</td>
                        <td><span class="order-status ${o.status}">${statusLabels[o.status] || o.status}</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderProfileWishlist() {
    const container = document.getElementById('profileWishlist');
    const wishlistProducts = STORE_DATA.products.filter(p => state.wishlist.includes(p.id));
    if (wishlistProducts.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray-500)"><div style="font-size:48px;margin-bottom:16px">❤️</div><p>В избранном пока нет товаров</p></div>';
        return;
    }
    container.innerHTML = `
        <div class="products-grid">
            ${wishlistProducts.map(p => `
                <div class="product-card">
                    <div class="product-image">${p.image}</div>
                    <div class="product-info">
                        <div class="product-category">${p.categoryName}</div>
                        <div class="product-title">${p.name}</div>
                        <div class="product-price">
                            <span class="current">${p.price.toLocaleString()} ₽</span>
                            <span class="unit">${p.unit}</span>
                        </div>
                        <div class="product-actions">
                            <button class="btn-add-cart" onclick="addToCart('${p.id}')\">🛒 В корзину</button>
                            <button class="btn-detail" onclick="toggleWishlist('${p.id}')\">❤️</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderProfileAddresses() {
    const container = document.getElementById('profileAddresses');
    const addresses = state.user?.addresses || [];
    if (addresses.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--gray-500)"><p>Адреса не добавлены</p></div>';
        return;
    }
    container.innerHTML = addresses.map((addr, i) => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:var(--gray-50);border-radius:var(--radius-sm);margin-bottom:8px">
            <span>📍 ${addr.city}, ${addr.street}, ${addr.house}</span>
            <button onclick="removeAddress(${i})" style="background:none;color:var(--danger);font-size:18px">🗑️</button>
        </div>
    `).join('');
}

function addAddress() {
    const city = prompt('Введите город:');
    if (!city) return;
    const street = prompt('Введите улицу:');
    if (!street) return;
    const house = prompt('Введите дом/квартиру:');
    if (!house) return;
    if (!state.user.addresses) state.user.addresses = [];
    state.user.addresses.push({ city, street, house });
    saveState();
    renderProfileAddresses();
    showToast('Адрес добавлен', 'success');
}

function removeAddress(index) {
    if (!confirm('Удалить адрес?')) return;
    state.user.addresses.splice(index, 1);
    saveState();
    renderProfileAddresses();
    showToast('Адрес удалён', 'success');
}

// ===== WISHLIST =====
function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
        showToast('Удалено из избранного', 'info');
    } else {
        state.wishlist.push(productId);
        showToast('Добавлено в избранное', 'success');
    }
    saveState();
    renderCatalog();
}

// ===== CATALOG =====
function renderCatalog() {
    const grid = document.getElementById('catalogGrid');
    const count = document.getElementById('catalogCount');
    if (!grid) return;
    let products = [...STORE_DATA.products];
    if (state.currentCategory && state.currentCategory !== 'all') {
        products = products.filter(p => p.category === state.currentCategory);
    }
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    if (priceMin && priceMin.value) products = products.filter(p => p.price >= Number(priceMin.value));
    if (priceMax && priceMax.value) products = products.filter(p => p.price <= Number(priceMax.value));
    switch (state.currentSort) {
        case 'price-asc': products.sort((a, b) => a.price - b.price); break;
        case 'price-desc': products.sort((a, b) => b.price - a.price); break;
        case 'new': products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
        default: products.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }
    count.textContent = 'Найдено: ' + products.length + ' товаров';
    if (products.length === 0) {
        grid.innerHTML = '<div style="text-align:center;padding:60px;color:var(--gray-500);grid-column:1/-1"><div style="font-size:64px;margin-bottom:16px">🔍</div><p>Товары не найдены. Попробуйте изменить фильтры.</p></div>';
        return;
    }
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            ${p.isNew ? '<span class="product-badge new">Новинка</span>' : ''}
            ${p.isPopular ? '<span class="product-badge">Популярное</span>' : ''}
            <button class="product-wishlist ${state.wishlist.includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${p.id}')">
                ${state.wishlist.includes(p.id) ? '❤️' : '🤍'}
            </button>
            <div class="product-image" onclick="openProductDetail('${p.id}')">
                ${p.image}
            </div>
            <div class="product-info">
                <div class="product-category">${p.categoryName}</div>
                <div class="product-title">${p.name}</div>
                <div class="product-meta">
                    ${p.composition && p.composition !== '—' ? '<span>🧵 ' + p.composition + '</span>' : ''}
                    ${p.width && p.width !== '—' ? '<span>📐 ' + p.width + '</span>' : ''}
                </div>
                <div class="product-price">
                    <span class="current">${p.price.toLocaleString()} ₽</span>
                    <span class="unit">${p.unit}</span>
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart('${p.id}')">🛒 В корзину</button>
                    <button class="btn-detail" onclick="openProductDetail('${p.id}')">👁️</button>
                </div>
            </div>
        </div>
    `).join('');
}

function applyFilters() {
    renderCatalog();
}

// ===== PRODUCT DETAIL =====
function openProductDetail(productId) {
    const product = STORE_DATA.products.find(p => p.id === productId);
    if (!product) return;
    const container = document.getElementById('productDetailContent');
    container.innerHTML = `
        <div class="product-detail-layout">
            <div class="product-detail-image">${product.image}</div>
            <div class="product-detail-info">
                <div class="product-category" style="margin-bottom:8px">${product.categoryName}</div>
                <h2>${product.name}</h2>
                <div class="product-detail-price">${product.price.toLocaleString()} ₽ / ${product.unit}</div>
                <p class="product-detail-desc">${product.desc}</p>
                <div class="product-detail-specs">
                    ${product.composition && product.composition !== '—' ? '<div class="product-detail-spec"><strong>Состав</strong>' + product.composition + '</div>' : ''}
                    ${product.width && product.width !== '—' ? '<div class="product-detail-spec"><strong>Ширина</strong>' + product.width + '</div>' : ''}
                    ${product.density && product.density !== '—' ? '<div class="product-detail-spec"><strong>Плотность</strong>' + product.density + '</div>' : ''}
                    ${product.care && product.care !== '—' ? '<div class="product-detail-spec"><strong>Уход</strong>' + product.care + '</div>' : ''}
                    ${product.color && product.color !== '—' ? '<div class="product-detail-spec"><strong>Цвет</strong>' + product.color + '</div>' : ''}
                    ${product.type && product.type !== '—' ? '<div class="product-detail-spec"><strong>Тип</strong>' + product.type + '</div>' : ''}
                </div>
                <div class="product-detail-qty">
                    <label>Количество:</label>
                    <div class="qty-controls">
                        <button onclick="detailQtyChange(-1)">−</button>
                        <span id="detailQty">1</span>
                        <button onclick="detailQtyChange(1)">+</button>
                    </div>
                </div>
                <button class="btn btn-primary btn-full" onclick="addToCartFromDetail('${product.id}')" style="padding:16px;font-size:18px">
                    🛒 Добавить в корзину — ${product.price.toLocaleString()} ₽
                </button>
            </div>
        </div>
    `;
    document.getElementById('productModal').classList.add('active');
    window._detailProductId = productId;
    window._detailQty = 1;
}

function detailQtyChange(delta) {
    window._detailQty = Math.max(1, (window._detailQty || 1) + delta);
    const el = document.getElementById('detailQty');
    if (el) el.textContent = window._detailQty;
}

function addToCartFromDetail(productId) {
    const qty = window._detailQty || 1;
    const product = STORE_DATA.products.find(p => p.id === productId);
    if (!product) return;
    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        state.cart.push({ id: productId, qty });
    }
    saveState();
    updateUI();
    renderCart();
    closeProductModal();
    showToast('✅ ' + product.name + ' (' + qty + ' ' + product.unit + ') добавлен в корзину', 'success');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

// ===== POPULAR PRODUCTS =====
function renderPopularProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;
    const popular = STORE_DATA.products.filter(p => p.isPopular).slice(0, 8);
    container.innerHTML = popular.map(p => `
        <div class="product-card">
            ${p.isNew ? '<span class="product-badge new">Новинка</span>' : ''}
            <button class="product-wishlist ${state.wishlist.includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${p.id}')">
                ${state.wishlist.includes(p.id) ? '❤️' : '🤍'}
            </button>
            <div class="product-image" onclick="openProductDetail('${p.id}')">${p.image}</div>
            <div class="product-info">
                <div class="product-category">${p.categoryName}</div>
                <div class="product-title">${p.name}</div>
                <div class="product-price">
                    <span class="current">${p.price.toLocaleString()} ₽</span>
                    <span class="unit">${p.unit}</span>
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart('${p.id}')">🛒 В корзину</button>
                    <button class="btn-detail" onclick="openProductDetail('${p.id}')">👁️</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== FAQ =====
function renderFAQ() {
    const container = document.getElementById('faqList');
    if (!container) return;
    container.innerHTML = STORE_DATA.faq.map((item, i) => `
        <div style="background:var(--white);border-radius:var(--radius-md);border:1px solid var(--gray-200);margin-bottom:12px;overflow:hidden">
            <button onclick="toggleFAQ(${i})" style="width:100%;padding:16px 20px;background:none;text-align:left;font-size:16px;font-weight:600;display:flex;justify-content:space-between;align-items:center;border:none;cursor:pointer">
                <span>${item.q}</span>
                <span id="faqIcon${i}" style="font-size:20px;transition:var(--transition)">▼</span>
            </button>
            <div id="faqAnswer${i}" style="padding:0 20px;max-height:0;overflow:hidden;transition:max-height 0.3s ease">
                <p style="padding-bottom:16px;color:var(--gray-600);line-height:1.7">${item.a}</p>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(index) {
    const answer = document.getElementById('faqAnswer' + index);
    const icon = document.getElementById('faqIcon' + index);
    if (!answer) return;
    if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
        answer.style.maxHeight = '0';
        if (icon) icon.textContent = '▼';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) icon.textContent = '▲';
    }
}

// ===== SEARCH =====
function handleSearch(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) {
        showToast('Введите поисковый запрос', 'info');
        return;
    }
    const results = STORE_DATA.products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query) ||
        (p.composition && p.composition.toLowerCase().includes(query)) ||
        (p.type && p.type.toLowerCase().includes(query))
    );
    if (results.length === 0) {
        showToast('Ничего не найдено по запросу "' + query + '"', 'info');
        navigateTo('catalog');
        return;
    }
    state.currentCategory = 'all';
    navigateTo('catalog');
    const grid = document.getElementById('catalogGrid');
    const count = document.getElementById('catalogCount');
    count.textContent = 'Найдено: ' + results.length + ' товаров по запросу "' + query + '"';
    grid.innerHTML = results.map(p => `
        <div class="product-card">
            ${p.isNew ? '<span class="product-badge new">Новинка</span>' : ''}
            <button class="product-wishlist ${state.wishlist.includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${p.id}')">
                ${state.wishlist.includes(p.id) ? '❤️' : '🤍'}
            </button>
            <div class="product-image" onclick="openProductDetail('${p.id}')">${p.image}</div>
            <div class="product-info">
                <div class="product-category">${p.categoryName}</div>
                <div class="product-title">${p.name}</div>
                <div class="product-price">
                    <span class="current">${p.price.toLocaleString()} ₽</span>
                    <span class="unit">${p.unit}</span>
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart('${p.id}')">🛒 В корзину</button>
                    <button class="btn-detail" onclick="openProductDetail('${p.id}')">👁️</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== DELIVERY CALCULATOR =====
function calculateDelivery() {
    const city = document.getElementById('calcCity')?.value || 'Москва';
    const weight = parseFloat(document.getElementById('calcWeight')?.value) || 1;
    const total = parseFloat(document.getElementById('calcTotal')?.value) || 0;
    const result = document.getElementById('deliveryResult');
    if (total >= 5000) {
        result.innerHTML = '<div class="delivery-result"><p class="free">🎉 Бесплатная доставка!</p><p style="color:var(--gray-500);font-size:14px">При заказе от 5 000 ₽ доставка по России бесплатно</p></div>';
        return;
    }
    const pochtaPrice = Math.round(300 + weight * 50);
    const sdekPrice = Math.round(400 + weight * 70);
    result.innerHTML = `
        <div class="delivery-result">
            <h4 style="margin-bottom:12px">📮 Почта России</h4>
            <p class="price">${pochtaPrice.toLocaleString()} ₽</p>
            <p style="color:var(--gray-500);font-size:14px">Срок: 3-14 дней</p>
            <hr style="margin:16px 0;border-color:var(--gray-200)">
            <h4 style="margin-bottom:12px">📦 СДЭК</h4>
            <p class="price">${sdekPrice.toLocaleString()} ₽</p>
            <p style="color:var(--gray-500);font-size:14px">Срок: 2-7 дней</p>
            <p style="margin-top:12px;font-size:13px;color:var(--gray-500)">📍 Доставка в г. ${city}</p>
        </div>
    `;
}

// ===== CHAT =====
function toggleChat() {
    const window = document.getElementById('chatWindow');
    window.classList.toggle('active');
    if (window.classList.contains('active')) {
        document.getElementById('chatInput').focus();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    const messages = document.getElementById('chatMessages');
    messages.innerHTML += '<div class="chat-msg user">' + text + '</div>';
    input.value = '';
    setTimeout(() => {
        const responses = [
            'Спасибо за ваш вопрос! Наш менеджер скоро ответит вам.',
            'Отличный выбор! Если нужна помощь с выбором — обращайтесь.',
            'Мы уже обрабатываем ваш запрос. Ожидайте ответа в ближайшее время.',
            'Благодарим за обращение! В рабочее время отвечаем в те��ение часа.'
        ];
        messages.innerHTML += '<div class="chat-msg support">' + responses[Math.floor(Math.random() * responses.length)] + '</div>';
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
    messages.scrollTop = messages.scrollHeight;
}

// ===== ADMIN =====
function openAdminMenu() {
    const dropdown = document.getElementById('adminDropdown');
    dropdown.classList.toggle('active');
}

document.addEventListener('click', function(e) {
    const menu = document.querySelector('.three-dots-menu');
    const dropdown = document.getElementById('adminDropdown');
    if (menu && dropdown && !menu.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

function requestAdminAccess(section) {
    document.getElementById('adminDropdown').classList.remove('active');
    state.adminSection = section;
    document.getElementById('passwordModal').classList.add('active');
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('passwordInput').focus();
}

function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    if (password === '7316') {
        document.getElementById('passwordModal').classList.remove('active');
        openAdmin();
    } else {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').focus();
    }
}

function openAdmin() {
    document.getElementById('adminPanel').classList.add('active');
    if (state.adminSection === 'orders') {
        showAdminTab('orders');
    } else {
        showAdminTab('products');
    }
    renderAdminProducts();
    renderAdminOrders();
}

function closeAdmin() {
    document.getElementById('adminPanel').classList.remove('active');
    state.adminSection = null;
}

function showAdminTab(tab) {
    document.querySelectorAll('.admin-tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    const tabMap = { products: 'adminTabProducts', orders: 'adminTabOrders' };
    const el = document.getElementById(tabMap[tab]);
    if (el) el.style.display = 'block';
    document.querySelector(`.admin-tab[data-admin-tab="${tab}"]`)?.classList.add('active');
    if (tab === 'products') renderAdminProducts();
    if (tab === 'orders') renderAdminOrders();
}

// ===== ADMIN PRODUCTS =====
function renderAdminProducts() {
    const container = document.getElementById('adminProductsList');
    if (!container) return;
    container.innerHTML = STORE_DATA.products.map((p, index) => `
        <div class="admin-product-card">
            <div class="product-image">${p.image}</div>
            <div style="font-weight:600;font-size:14px;margin-bottom:4px">${p.name}</div>
            <div style="font-size:13px;color:var(--gray-500);margin-bottom:4px">${p.categoryName}</div>
            <div style="font-size:16px;font-weight:700;color:var(--primary);margin-bottom:8px">${p.price.toLocaleString()} ₽</div>
            <div style="font-size:12px;color:var(--gray-500)">В наличии: ${p.stock} шт.</div>
            <div class="admin-product-actions">
                <button class="admin-btn admin-btn-edit" onclick="editProduct(${index})">✏️ Ред.</button>
                <button class="admin-btn admin-btn-delete" onclick="deleteProduct(${index})">🗑️ Удалить</button>
            </div>
        </div>
    `).join('');
}

function showAddProductForm() {
    const form = document.getElementById('adminProductForm');
    form.style.display = 'block';
    form.querySelector('h4').textContent = 'Добавить товар';
    form.querySelector('form').reset();
    form.querySelector('form').dataset.editIndex = '';
    form.scrollIntoView({ behavior: 'smooth' });
}

function hideProductForm() {
    document.getElementById('adminProductForm').style.display = 'none';
}

function editProduct(index) {
    const product = STORE_DATA.products[index];
    const form = document.getElementById('adminProductForm');
    form.style.display = 'block';
    form.querySelector('h4').textContent = 'Редактировать товар';
    form.querySelector('form').dataset.editIndex = index;
    form.querySelector('[name="pName"]').value = product.name;
    form.querySelector('[name="pCategory"]').value = product.category;
    form.querySelector('[name="pPrice"]').value = product.price;
    form.querySelector('[name="pUnit"]').value = product.unit;
    form.querySelector('[name="pDesc"]').value = product.desc;
    form.querySelector('[name="pImage"]').value = product.image;
    form.querySelector('[name="pComposition"]').value = product.composition;
    form.querySelector('[name="pWidth"]').value = product.width;
    form.querySelector('[name="pDensity"]').value = product.density;
    form.querySelector('[name="pCare"]').value = product.care;
    form.querySelector('[name="pColor"]').value = product.color;
    form.querySelector('[name="pType"]').value = product.type;
    form.querySelector('[name="pStock"]').value = product.stock;
    form.querySelector('[name="pInStock"]').checked = product.inStock;
    form.querySelector('[name="pIsNew"]').checked = product.isNew;
    form.querySelector('[name="pIsPopular"]').checked = product.isPopular;
    form.scrollIntoView({ behavior: 'smooth' });
}

function saveProduct(e) {
    e.preventDefault();
    const form = e.target;
    const editIndex = form.dataset.editIndex;
    const product = {
        id: editIndex ? STORE_DATA.products[parseInt(editIndex)].id : 'p' + Date.now(),
        name: form.querySelector('[name="pName"]').value.trim(),
        category: form.querySelector('[name="pCategory"]').value,
        categoryName: STORE_DATA.categories.find(c => c.id === form.querySelector('[name="pCategory"]').value)?.name || '',
        price: Number(form.querySelector('[name="pPrice"]').value),
        unit: form.querySelector('[name="pUnit"]').value.trim() || 'за шт',
        desc: form.querySelector('[name="pDesc"]').value.trim() || 'Описание отсутствует',
        image: form.querySelector('[name="pImage"]').value.trim() || '📦',
        composition: form.querySelector('[name="pComposition"]').value.trim() || '—',
        width: form.querySelector('[name="pWidth"]').value.trim() || '—',
        density: form.querySelector('[name="pDensity"]').value.trim() || '—',
        care: form.querySelector('[name="pCare"]').value.trim() || '—',
        color: form.querySelector('[name="pColor"]').value.trim() || '—',
        type: form.querySelector('[name="pType"]').value.trim() || '—',
        stock: Number(form.querySelector('[name="pStock"]').value) || 0,
        inStock: form.querySelector('[name="pInStock"]').checked,
        isNew: form.querySelector('[name="pIsNew"]').checked,
        isPopular: form.querySelector('[name="pIsPopular"]').checked
    };
    const fileInput = form.querySelector('[name="pImageFile"]');
    if (fileInput && fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(ev) {
            product.image = '<img src="' + ev.target.result + '" style="width:100%;height:100%;object-fit:cover">';
            saveProductData(product, editIndex);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        saveProductData(product, editIndex);
    }
}

function saveProductData(product, editIndex) {
    if (editIndex !== undefined && editIndex !== '') {
        STORE_DATA.products[parseInt(editIndex)] = product;
        showToast('✅ Товар обновлён: ' + product.name, 'success');
    } else {
        STORE_DATA.products.push(product);
        showToast('✅ Товар добавлен: ' + product.name, 'success');
    }
    saveCustomProducts();
    hideProductForm();
    renderAdminProducts();
    renderCatalog();
    renderPopularProducts();
}

function deleteProduct(index) {
    const p = STORE_DATA.products[index];
    if (!confirm('Удалить товар "' + p.name + '"?')) return;
    STORE_DATA.products.splice(index, 1);
    saveCustomProducts();
    renderAdminProducts();
    renderCatalog();
    renderPopularProducts();
    showToast('🗑️ Товар удалён: ' + p.name, 'info');
}

// ===== ADMIN ORDERS =====
function renderAdminOrders() {
    const container = document.getElementById('adminOrdersList');
    if (!container) return;
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    const searchQuery = (document.getElementById('adminOrderSearch')?.value || '').toLowerCase();
    const statusFilter = document.getElementById('adminOrderStatus')?.value || 'all';
    let filtered = [...orders];
    if (statusFilter !== 'all') {
        filtered = filtered.filter(o => o.status === statusFilter);
    }
    if (searchQuery) {
        filtered = filtered.filter(o =>
            o.id.toLowerCase().includes(searchQuery) ||
            (o.user?.name || '').toLowerCase().includes(searchQuery) ||
            (o.user?.phone || '').toLowerCase().includes(searchQuery) ||
            new Date(o.date).toLocaleDateString('ru-RU').includes(searchQuery)
        );
    }
    if (filtered.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray-500)"><div style="font-size:48px;margin-bottom:16px">📋</div><p>Заказы не найдены</p></div>';
        return;
    }
    const statusLabels = { new: 'Новый', processing: 'В обработке', shipped: 'Отправлен', delivered: 'Доставлен', cancelled: 'Отменён' };
    container.innerHTML = `
        <table class="admin-orders-table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Дата</th>
                    <th>Клиент</th>
                    <th>Товары</th>
                    <th>Сумма</th>
                    <th>Доставка</th>
                    <th>Оплата</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                ${filtered.reverse().map((o, i) => `
                    <tr>
                        <td style="font-weight:600">#${o.id}</td>
                        <td style="font-size:13px">${new Date(o.date).toLocaleDateString('ru-RU')}</td>
                        <td>${o.user?.name || '—'}<br><span style="font-size:12px;color:var(--gray-500)">${o.user?.phone || ''}</span></td>
                        <td style="font-size:13px">${o.items.map(item => {
                            const p = STORE_DATA.products.find(pr => pr.id === item.id);
                            return (p ? p.name : 'Товар') + ' × ' + item.qty;
                        }).join('<br>')}</td>
                        <td style="font-weight:700;color:var(--primary)">${o.total.toLocaleString()} ₽</td>
                        <td style="font-size:13px">${o.deliveryMethod || '—'}</td>
                        <td style="font-size:13px">${o.paymentMethod || '—'}</td>
                        <td>
                            <select onchange="updateOrderStatus('${o.id}', this.value)" style="padding:6px 12px;border:1px solid var(--gray-200);border-radius:var(--radius-sm);font-size:13px">
                                ${Object.entries(statusLabels).map(([key, label]) =>
                                    `<option value="${key}" ${o.status === key ? 'selected' : ''}>${label}</option>`
                                ).join('')}
                            </select>
                        </td>
                        <td>
                            <button onclick="deleteOrder('${o.id}')" style="background:none;color:var(--danger);font-size:18px;padding:4px 8px;border:none;cursor:pointer" title="Удалить заказ">🗑️</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function updateOrderStatus(orderId, newStatus) {
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        localStorage.setItem('matreshka_orders', JSON.stringify(orders));
        showToast('✅ Статус заказа #' + orderId + ' изменён на "' + {
            new: 'Новый', processing: 'В обработке', shipped: 'Отправлен', delivered: 'Доставлен', cancelled: 'Отменён'
        }[newStatus] + '"', 'success');
        renderAdminOrders();
    }
}

function deleteOrder(orderId) {
    if (!confirm('Удалить заказ #' + orderId + '?')) return;
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    const filtered = orders.filter(o => o.id !== orderId);
    localStorage.setItem('matreshka_orders', JSON.stringify(filtered));
    showToast('🗑️ Заказ #' + orderId + ' удалён', 'info');
    renderAdminOrders();
}

function filterAdminOrders() {
    renderAdminOrders();
}

function exportOrders() {
    const orders = JSON.parse(localStorage.getItem('matreshka_orders') || '[]');
    if (orders.length === 0) {
        showToast('Нет заказов для экспорта', 'error');
        return;
    }
    const statusLabels = { new: 'Новый', processing: 'В обработке', shipped: 'Отправлен', delivered: 'Доставлен', cancelled: 'Отменён' };
    let csv = '№;Дата;Клиент;Телефон;Товары;Сумма;Доставка;Оплата;Статус;Адрес\n';
    orders.forEach(o => {
        const items = o.items.map(item => {
            const p = STORE_DATA.products.find(pr => pr.id === item.id);
            return (p ? p.name : 'Товар') + ' x' + item.qty;
        }).join(', ');
        const address = o.address ? `${o.address.city}, ${o.address.street}, ${o.address.house}` : '—';
        csv += `${o.id};${new Date(o.date).toLocaleDateString('ru-RU')};${o.user?.name || '—'};${o.user?.phone || '—'};"${items}";${o.total};${o.deliveryMethod || '—'};${o.paymentMethod || '—'};${statusLabels[o.status] || o.status};"${address}"\n`;
    });
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'orders_export_' + new Date().toISOString().slice(0, 10) + '.csv';
    link.click();
    URL.revokeObjectURL(link.href);
    showToast('📥 Экспорт завершён', 'success');
}
// ===== ПРИНУДИТЕЛЬНАЯ СИНХРОНИЗАЦИЯ С ОБЛАКОМ =====
async function syncWithCloud() {
    showToast('🔄 Синхронизация с облаком...', 'info');
    await loadCustomProducts();
    renderCatalog();
    renderPopularProducts();
    if (document.getElementById('adminProductsList')) {
        renderAdminProducts();
    }
    showToast('✅ Данные синхронизированы', 'success');
}

// ===== UI UPDATE =====
function updateUI() {
    const count = getCartCount();
    document.querySelectorAll('.cart-badge').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
    const authBtns = document.getElementById('authButtons');
    if (state.user) {
        authBtns.innerHTML = `
            <button onclick="navigateTo('profile')" title="Личный кабинет">👤</button>
            <button onclick="logout()" title="Выйти">🚪</button>
        `;
    } else {
        authBtns.innerHTML = `
            <button onclick="openAuthModal('login')" title="Войти">👤</button>
        `;
    }
}

// ===== LOGO =====
function applyLogo(url) {
    if (!url) return;
    const logoImg = document.getElementById('logoImg');
    const logoSvg = document.getElementById('logoSvg');
    if (logoImg && logoSvg) {
        logoImg.src = url;
        logoImg.style.display = 'block';
        logoSvg.style.display = 'none';
    }
    const heroLogoImg = document.getElementById('heroLogoImg');
    const heroLogoSvg = document.getElementById('heroLogoSvg');
    const heroLogoText = document.getElementById('heroLogoText');
    if (heroLogoImg && heroLogoSvg) {
        heroLogoImg.src = url;
        heroLogoImg.style.display = 'block';
        heroLogoSvg.style.display = 'none';
        if (heroLogoText) heroLogoText.style.display = 'none';
    }
    const footerLogoImg = document.getElementById('footerLogoImg');
    const footerLogoSvg = document.getElementById('footerLogoSvg');
    if (footerLogoImg && footerLogoSvg) {
        footerLogoImg.src = url;
        footerLogoImg.style.display = 'block';
        footerLogoSvg.style.display = 'none';
    }
}

// ===== INIT =====
loadState();

(async function initApp() {
    await loadCustomProducts();

    document.addEventListener('DOMContentLoaded', function() {
        renderPopularProducts();
        renderFAQ();
        updateUI();

        const savedLogo = localStorage.getItem('matreshka_logo');
        if (savedLogo) {
            applyLogo(savedLogo);
        }

        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
        });

        document.getElementById('cartOverlay').addEventListener('click', closeCart);

        document.getElementById('passwordInput').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') checkPassword();
        });

        document.getElementById('chatInput').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') sendChatMessage();
        });

        if (!localStorage.getItem('matreshka_logo')) {
            localStorage.setItem('matreshka_logo', 'https://s3.radikal.cloud/2026/06/12/i-171370a0c13fcb6db.webp');
        }

        console.log('🪡 МАТРЁШКА — Магазин тканей и фурнитуры');
        console.log('📦 Данные загружены:', STORE_DATA.products.length, 'товаров');
    });
})();
