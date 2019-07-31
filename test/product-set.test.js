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
