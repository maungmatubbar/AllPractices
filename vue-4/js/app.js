var Product = new Vue({


        el:"#app",
        data:{
            products: [
                {
                    id:1,
                    name: "Watch",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! ",
                    price:500,
                    inStock:20,

                },
                {
                    id:2,
                    name: "Samsung Mobile",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! ",
                    price:60000,
                    inStock:10,

                },
                {
                    id:3,
                    name: "Fan",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! ",
                    price:700,
                    inStock:0,

                },
                {
                    id:4,
                    name: "Tv",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! ",
                    price:4000.30,
                    inStock:30,

                },
                {
                    id:5,
                    name: "Sound Box",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! ",
                    price:3000,
                    inStock:40,

                },
                {
                    id:6,
                    name: "Charger",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! ",
                    price:500,
                    inStock:5,

                },
                {
                    id:7,
                    name: "Light",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! ",
                    price:1000,
                    inStock:3,

                },
                {
                    id:8,
                    name: "Nokia C5",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! ",
                    price:5000,
                    inStock:0,

                },
                {
                    id:9,
                    name: "Nokia X3",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! ",
                    price:3000,
                    inStock:8,

                }
                
            ],
            cart:{
                items:[],
            },
            showingCart:true,
        },
        methods:{
            addProductToCart:function(product){
                this.cart.items.push({
                    product:product,
                    quantity:1
                });
                product.inStock--
            },
            checkOut:function(){
                if(confirm("Are You sure to Buy this product!")){
                    this.cart.items.forEach(function(item){
                        item.product.inStock -item.quantity;
                    });
                    return this.cart.items = [];
                }
               
            },
            increaseCartQuantity:function(cartItem){
                cartItem.product.inStock--;
                cartItem.quantity++;
            },
            decreaseCartQuantity:function(cartItem){
                cartItem.product.inStock++;
                cartItem.quantity--;
            }
        },
        computed:{
            cartTotal:function(){
                var total = 0;
                this.cart.items.forEach(function(item){
                    total += item.quantity * item.product.price;
                });
                return total;
            },
            taxAmount:function(){
               tax = ((this.cartTotal*6)/100);
                return tax;
            },
            grandTotal:function(){
                return((this.cartTotal+this.taxAmount));
            }
        },
        
});