import products from './products.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let masterProductsList = store.get('products');
        if(!masterProductsList) {
            store.save('products', products);
            masterProductsList = products;
        }
        return masterProductsList;
    },
};

export default store;