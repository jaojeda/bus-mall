import products from './products.js';
import { findProduct } from '../util.js';

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
    getResults() {
        let results = store.get('results');
        if(!results) {
            results = [];
        }
        return results;
    },
    saveChoice(id) {
        const results = store.getResults();
        const addedResult = findProduct(results, id);
        if(addedResult) {
            addedResult.clicked++;
        }
        else {
            const addedResult = {
                id: id,
                clicked: 1,
                views: 0,
            };
            results.push(addedResult);
        }
        store.save('results', results);
    },
    saveViews(id) {
        const results = store.getResults();
        const addedView = findProduct(results, id);
        if(addedView) {
            addedView.views++;
        }
        else {
            const addedView = {
                id: id,
                clicked: 0,
                views: 1,
            };
            results.push(addedView);
        }
        store.save('results', results);
    }
};

const sessionStore = {
    storage: window.sessionStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        sessionStore.storage.setItem(key, json);
    },
    get(key) {
        const json = sessionStore.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let masterProductsList = sessionStore.get('products');
        if(!masterProductsList) {
            sessionStore.save('products', products);
            masterProductsList = products;
        }
        return masterProductsList;
    },
    getResults() {
        let results = sessionStore.get('results');
        if(!results) {
            results = [];
        }
        return results;
    },
    saveChoice(id) {
        const results = sessionStore.getResults();
        const addedResult = findProduct(results, id);
        if(addedResult) {
            addedResult.clicked++;
        }
        else {
            const addedResult = {
                id: id,
                clicked: 1,
                views: 0,
            };
            results.push(addedResult);
        }
        sessionStore.save('results', results);
    },
    saveViews(id) {
        const results = sessionStore.getResults();
        const addedView = findProduct(results, id);
        if(addedView) {
            addedView.views++;
        }
        else {
            const addedView = {
                id: id,
                clicked: 0,
                views: 1,
            };
            results.push(addedView);
        }
        sessionStore.save('results', results);
    }
};

export { store, sessionStore };