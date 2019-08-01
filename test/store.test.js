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

test('create blank space for choice results', (assert) => {
    //act
    const results = store.getResults();
    //assert
    assert.deepEqual(results, []);
});

test('save clicked choice', (assert) => {
    const id = 'usb-octopus';
    const expected = [{
        id: 'usb-octopus',
        clicked: 1,
    }];

    //act
    store.saveChoice(id);
    const results = store.getResults();

    //assert
    assert.deepEqual(results, expected);
});