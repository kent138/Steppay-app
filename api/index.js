const crypto = require('crypto');

// Конфигурация
const BUCKET_NAME = 'matroshka-products-store';
const STORAGE_FILE = 'products.json';
const DEFAULT_PRODUCT_IDS = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14','p15','p16'];

// ===== Object Storage Helper (public bucket) =====
async function getStorageData() {
    try {
        const response = await fetch(
            `https://storage.yandexcloud.net/${BUCKET_NAME}/${STORAGE_FILE}`
        );
        if (!response.ok) {
            if (response.status === 404) return { customProducts: [] };
            throw new Error(`Storage error: ${response.status}`);
        }
        return await response.json();
    } catch (e) {
        console.warn('Storage read error:', e.message);
        return { customProducts: [] };
    }
}

async function saveStorageData(data) {
    const response = await fetch(
        `https://storage.yandexcloud.net/${BUCKET_NAME}/${STORAGE_FILE}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
    );
    if (!response.ok) throw new Error(`Storage write error: ${response.status}`);
}

// ===== CORS Headers =====
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
};

function corsResponse(statusCode, body) {
    return {
        statusCode,
        headers: {
            ...CORS_HEADERS,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
}

// ===== Handlers =====
async function handleGetProducts() {
    const storage = await getStorageData();
    return corsResponse(200, {
        defaultIds: DEFAULT_PRODUCT_IDS,
        customProducts: storage.customProducts || []
    });
}

async function handleAddProduct(body) {
    const { product } = body;
    if (!product || !product.name) {
        return corsResponse(400, { error: 'Product name is required' });
    }

    const storage = await getStorageData();
    const newProduct = {
        ...product,
        id: 'p' + Date.now() + crypto.randomBytes(4).toString('hex'),
        createdAt: new Date().toISOString()
    };

    storage.customProducts = storage.customProducts || [];
    storage.customProducts.push(newProduct);
    await saveStorageData(storage);

    return corsResponse(201, { product: newProduct });
}

async function handleUpdateProduct(productId, body) {
    const { product } = body;
    if (!product) {
        return corsResponse(400, { error: 'Product data is required' });
    }

    const storage = await getStorageData();
    const index = (storage.customProducts || []).findIndex(p => p.id === productId);

    if (index === -1) {
        return corsResponse(404, { error: 'Product not found' });
    }

    storage.customProducts[index] = {
        ...storage.customProducts[index],
        ...product,
        id: productId,
        updatedAt: new Date().toISOString()
    };

    await saveStorageData(storage);
    return corsResponse(200, { product: storage.customProducts[index] });
}

async function handleDeleteProduct(productId) {
    const storage = await getStorageData();
    const index = (storage.customProducts || []).findIndex(p => p.id === productId);

    if (index === -1) {
        return corsResponse(404, { error: 'Product not found' });
    }

    storage.customProducts.splice(index, 1);
    await saveStorageData(storage);

    return corsResponse(200, { success: true });
}

// ===== Main Handler =====
module.exports.handler = async function (event, context) {
    console.log('Event path:', event.path);

    if (event.httpMethod === 'OPTIONS') {
        return corsResponse(200, {});
    }

    try {
        const path = event.path || '';
        const method = event.httpMethod || 'GET';
        let body = {};

        if (event.body) {
            try {
                body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
            } catch (e) {
                return corsResponse(400, { error: 'Invalid JSON body' });
            }
        }

        if (method === 'GET' && path === '/products') {
            return await handleGetProducts();
        }

        if (method === 'POST' && path === '/products') {
            return await handleAddProduct(body);
        }

        const putMatch = path.match(/^\/products\/(.+)$/);
        if (method === 'PUT' && putMatch) {
            return await handleUpdateProduct(putMatch[1], body);
        }

        const deleteMatch = path.match(/^\/products\/(.+)$/);
        if (method === 'DELETE' && deleteMatch) {
            return await handleDeleteProduct(deleteMatch[1]);
        }

        return corsResponse(404, { error: 'Not found' });
    } catch (e) {
        console.error('Handler error:', e);
        return corsResponse(500, { error: 'Internal server error: ' + e.message });
    }
};
