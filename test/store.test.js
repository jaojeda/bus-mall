import products from '../src/data/products.js';
import store from '../src/data/store.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('gets products and saves them', (assert) => {
    //arrange
    const key = 'pizza';
    const pizza = { name: 'cheese' };

    //act
    store.save(key, pizza);
    const got = store.get(key);

    //assert
    assert.deepEqual(got, pizza);
});

test('products list is pulling correctly', (assert) => {
    //arrange
    //act
    const masterProductsList = store.getProducts();

    //assert
    assert.deepEqual(masterProductsList, products);
});