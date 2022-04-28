const product = {
    props: ['img', 'product'],
    template: `<div class="product-item">
                        <img :src="img" alt="Product img">
                        <div class="product-list">
                            <h3>{{ product.product_name }}</h3>
                            <p>{{ product.price }} $</p>
                            <button class="buy-button" @click="$root.$refs.basket.addItemToBasket(product)">Купить</button>
                        </div>
                    </div>`
}

const products = {
    components: {product},
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'img/laptope_013.png',
            filtered: []
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.$parent.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    methods: {
        filter(val) {
            let regExp = new RegExp(val, 'i');
            this.filtered = this.products.filter(el => regExp.test(el.product_name))
        }
    },
    template: `
    <div class="products">
        <product 
            v-for="product of filtered" 
            :img="imgCatalog"
            :product="product">     
        </product>
    </div>
    `
}