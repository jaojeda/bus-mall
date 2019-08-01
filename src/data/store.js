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
            };
            results.push(addedResult);
        }
        store.save('results', results);
    }
};

export default store;