
export function getRandomInt(length) {
    return Math.floor(Math.random() * length); 
}

export function findProduct(products, id) {
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        if(product.id === id) {
            return product;
        }
    }
    return null;
}