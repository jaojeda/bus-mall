import { getRandomInt } from './util.js';

class ProductList {
    constructor(products) {
        this.list = products.slice();
    }

    getRandomProduct() {
        const index = getRandomInt(this.list.length);
        const product = this.list[index];
        return product;
    }
}

export default ProductList;