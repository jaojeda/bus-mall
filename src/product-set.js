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

    removeById(id) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(product.id === id) {
                list.splice(i, 1);
                return;
            }
        }
    }
}

export default ProductList;