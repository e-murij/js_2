const basketItem = {
    props: ['basketItem'],
    template: `
            <div>
                <p> Название: {{ basketItem.product_name }}</p>
                <p> Количество: {{ basketItem.quantity }}</p>
                <p> Цена за единицу: {{ basketItem.price }}</p>
                <p> Стоимость: {{basketItem.quantity * basketItem.price}}</p>
                <div class="right-block">
                    <button class="del-btn" @click="$root.$refs.basket.removeItemFromBasket(basketItem) ">&times;</button>
                </div>
                <hr>
            </div>
        `
}

const basket = {
    components: {'basketItem': basketItem},
    data() {
        return {
            basketUrl: '/getBasket.json',
            showBasket: false,
            basketItems: []
        }
    },
    methods: {
        addItemToBasket(product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.basketItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product)
                            this.basketItems.push(prod)
                        }
                    } else {
                        console.log('Some error')
                    }
                })
        },
        removeItemFromBasket(product) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            product.quantity--
                        } else {
                            this.basketItems.splice(this.basketItems.indexOf(product), 1)
                        }
                    }
                })
        }

    },
    mounted() {
        this.$parent.getJson(`${API + this.basketUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.basketItems.push(el);
                }
            })
    },

    template: `
    <div>
        <button class="btn-basket" type="button" @click="showBasket = !showBasket">Корзина</button>
        <div class="basket-block" v-show="showBasket">
            <p v-if="basketItems.length==0">Cart is empty</p>
            <basketItem v-for="product of basketItems"
            :basketItem="product">
            </basketItem>
        </div>
    </div>
    `
}