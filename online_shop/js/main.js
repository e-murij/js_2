const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50}
];



const renderProduct = (product,img='img/laptope_013.png') => {
    return ` <div class="product-item">
                <img src="${img}">
                <div class="product-list">
                    <h3>${product.title}</h3>
                    <span class="price">${product.price}</span>
                    <button class="buy-button">Buy</button>
                </div>
              </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(product => renderProduct(product)).join('');
};



renderPage(products);