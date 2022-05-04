Vue.component('filter-el', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `<form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch" placeholder="search">
               </form>`
})