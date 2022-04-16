class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    countTotalPrice() {
        return this.goods.reduce((totalPrice, item) => totalPrice + item.price, 0);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'img/laptope_013.png') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                    <img src="${this.img}">
                    <div class="product-list">
                        <h3>${this.title}</h3>
                        <span class="price">${this.price}</span>
                        <button class="buy-button">Buy</button>
                    </div>
                 </div>`
    }
}

class Basket {
    constructor() {

    }

    addItemToBasket() {

    }

    deleteItemFromBasket() {

    }

    changeItemInBasket() {

    }

    basketTotalPrice() {

    }

    render() {

    }
}

class BasketItem {
    render() {

    }
}

let list = new ProductList();
console.log(list.countTotalPrice())
