//product class
class Product{
    title;
    imageUrl;
    decription;
    price;

    constructor (title,imageUrl,decription,price){
        this.title= title;
        this.imageUrl = imageUrl;
        this.decription= decription;
        this.price = price;
    }
}
//shopping cart
class ShoppingCart{
     items = [];
    addItem(product){
        this.items.push(product);
        this.totalOutPut = `<h2>Total amount \$ ${1}</h2>`;
    }
     render(){
        const cartElement = document.createElement('section');
        cartElement.innerHTML=`
            <h2>Total amount \$ ${0}</h2>
            <button>Order now </button>
        `;
        cartElement.className = ' cart';
        this.totalOutPut = cartElement.querySelector('h2');
        return cartElement;
     }
}
//display a single product
class ProductItem{    
    constructor(product){
        this.product =product;
    }
    addToCart(){
        console.log("Adding to cart");
        console.log(this.product);
    }
    render(){
        const prodElement = document.createElement('li');
        prodElement.className = 'product-item';
        prodElement.innerHTML = `
         <div>
            <img src=${this.product.imageUrl} alt=${this.product.title}/>
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.decription}</p>
                <button>Add to Cart</button>
            </div>
         </div>            
        `;
        const addToCartButton = prodElement.querySelector('button');
        addToCartButton.addEventListener('click',this.addToCart.bind(this));
        return prodElement;
    }
}

//class for list of products
class ProductList  {
    products= [
        new Product(
        "Chair",
        "https://cdn.pixabay.com/photo/2018/03/08/18/13/chair-3209341_640.jpg",
        "a very nice chair",
        99.99      
        ),
        new Product(
        "Bag",
        "https://cdn.pixabay.com/photo/2016/06/25/12/50/handbag-1478814_640.jpg",
        "a very nice bag",
        30.99      
        )
       
    ];
    constructor(){}
    render(){    
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
           const produtItem = new ProductItem(prod);
           const prodItem = produtItem.render();
            prodList.append(prodItem)
        }
      return prodList;
    }
}

//default page rendered
class Shop{
    render(){
        const renderHook = document.getElementById('app');
        const cart = new ShoppingCart();
        const cartElement = cart.render();
        const productList = new ProductList();
        const productListElemnt = productList.render();
        renderHook.append(cartElement);
        renderHook.append(productListElemnt);
    }
}
const shop = new Shop();
shop.render();
