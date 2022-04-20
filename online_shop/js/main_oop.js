const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
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
        this.title = product.product_name;
        this.id = product.id_product;
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
    constructor(container = '.basket-block') {
        this.container = container;
        this.goods = [];
        this._clickOnBasket();
        this._getBasketItem()
            .then(data => {
                this.goods = [...data.contents];
                this.render()
            });
    }

    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    deleteItemFromBasket() {

    }

    changeItemInBasket() {

    }

    basketTotalPrice() {

    }

    _clickOnBasket() {
        document.querySelector(".btn-basket").addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let item of this.goods) {
            const itemObj = new BasketItem();

            block.insertAdjacentHTML('beforeend', itemObj.render(item));
        }

    }
}

class BasketItem {
    render(item) {
        return `<div>
                    <p>Название: ${item.product_name}</p>
                    <p>Количество; ${item.quantity}</p>
                    <p>Цена за единицу: ${item.price}</p>
                    <p>Стоимость: ${item.quantity * item.price}</p>
                    <hr>
                </div>`
    }
}

let list = new ProductList();
console.log(list.countTotalPrice())
let basket = new Basket();
