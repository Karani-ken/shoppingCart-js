const ProductList = {
    products: [
        {
            title: "Chair",
            imageUrl:"https://cdn.pixabay.com/photo/2018/03/08/18/13/chair-3209341_640.jpg",
            price: 99.99,
            decription: "a very nice chair"
        }, {
            title: "Bag",
            imageUrl:"https://cdn.pixabay.com/photo/2016/06/25/12/50/handbag-1478814_640.jpg",
            price: 30.00,
            decription: "a very nice bag"
        }
    ],
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const prodElement = document.createElement('li');
            prodElement.className = 'product-item';
            prodElement.innerHTML = `
             <div>
                <img src=${prod.imageUrl} alt=${prod.title}/>
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.decription}</p>
                    <button>Add to Cart</button>
                </div>
             </div>            
            `;
            prodList.append(prodElement)
        }
      renderHook.append(prodList);
    }
}

ProductList.render();