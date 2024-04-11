import { createApp } from "vue";

createApp({
    compilerOptions: {
        delimiters: ['${', '}$'],
    },
    data() {
       return  {
        timeout: null,
        isLoading: false,
        produits: null
       };
    },
   methods: {
    updateInput(event: KeyboardEvent){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(async() => {
            this.isLoading = true;
        try {
         const response = await   fetch(`/produit/search/${ this.$refs.input.value }`)
         const body = await response.json();
         this.produits = JSON.parse(body);
         this.isLoading = false;
         console.log(this.produits);
         
         console.log(body);
        } catch (e) {
            this.isLoading = false;
            this.produits = null;
        }
        }, 1000) 
    }
   }
}).mount('#search')