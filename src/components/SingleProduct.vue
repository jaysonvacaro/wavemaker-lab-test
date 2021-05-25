<template>
    <div class="card"> 
       <div class="card-body"> 
           <h5 class="card-title">{{product.name}}</h5> 
           <p class="card-text">Price: <b>${{product.price}}</b></p> 
           <button 
               class="btn mt-3"
               :class="btn-success"
               @click="addToCart(product.id)">
               Add to Cart
           </button> 
       </div> 
   </div>
</template>

<script>
    export default{
        props: ["product"],
        computed: {
            inCartQuantity() {
                return this.product.quantity;
            }
        },
        methods: {
            addToCart(id){
                this.$store.dispatch("addToCart", id);
            }
        }
    }
</script>