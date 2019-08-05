import products from '../src/data/products.js';
import ProductList from '../src/product-set.js';

const test = QUnit.test;

QUnit.module('Product List');

test('copies master product list', (assert) => {
    //act
    const productList = new ProductList(products);
    
    //assert
    assert.notEqual(productList.list, products);
    assert.deepEqual(productList.list, products);
});

test('get random product', (assert) => {
    //arrange
    const productList = new ProductList(products);

    //act
    const product = productList.getRandomProduct();

    //assert
    assert.ok(products.includes(product));
});

test('remove products by id', (assert) => {
    //arrange
    const productList = new ProductList(products);
    const usedProduct = products[0];

    //act
    productList.removeById(usedProduct.id);

    //assert
    assert.notOk(productList.list.includes(usedProduct));
});
