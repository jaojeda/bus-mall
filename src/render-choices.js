export function renderChoice(product) {
    const button = document.createElement('button');
    button.className = 'product-choice';
    button.value = product.id;
    
    const img = document.createElement('img');
    img.src = product.image;
    button.appendChild(img);

    return button;   
}