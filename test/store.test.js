import products from '../src/data/products.js';
import { store, sessionStore } from '../src/data/store.js';

const test = QUnit.test;

QUnit.module('Local Store');

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
        views: 0,
    }];
    //act
    store.saveChoice(id);
    const results = store.getResults();

    //assert
    assert.deepEqual(results, expected);
});

test('save views', (assert) => {
    const id = 'usb-octopus';
    const expected = [{
        id: 'usb-octopus',
        clicked: 0,
        views: 1,
    }];

    //act
    store.saveViews(id);
    const results = store.getResults();

    //assert
    assert.deepEqual(results, expected);
});


QUnit.module('Session Store');

test('gets products and saves them', (assert) => {
    //arrange
    const key = 'pizza';
    const pizza = { name: 'cheese' };

    //act
    store.save(key, pizza);
    const got = sessionStore.get(key);

    //assert
    assert.deepEqual(got, pizza);
});

test('products list is pulling correctly', (assert) => {
    //arrange
    //act
    const masterProductsList = sessionStore.getProducts();

    //assert
    assert.deepEqual(masterProductsList, products);
});

test('create blank space for choice results', (assert) => {
    //act
    const results = sessionStore.getResults();
    //assert
    assert.deepEqual(results, []);
});

test('save clicked choice', (assert) => {
    const id = 'usb-octopus';
    const expected = [{
        id: 'usb-octopus',
        clicked: 1,
        views: 0,
    }];
    //act
    sessionStore.saveChoice(id);
    const results = sessionStore.getResults();

    //assert
    assert.deepEqual(results, expected);
});

test('save views', (assert) => {
    const id = 'usb-octopus';
    const expected = [{
        id: 'usb-octopus',
        clicked: 0,
        views: 1,
    }];

    //act
    sessionStore.saveViews(id);
    const results = sessionStore.getResults();

    //assert
    assert.deepEqual(results, expected);
});