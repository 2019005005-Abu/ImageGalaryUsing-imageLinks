const productForm=document.getElementById('add-product');
console.log(productForm)

const allProductDiv=document.getElementById('all-product');
console.log(allProductDiv)

const ProductNameInput=document.getElementById('product-name');

console.log(ProductNameInput);

const ProductImageUrlInput=document.getElementById('product-image');
console.log(ProductImageUrlInput);

const PriceInput=document.getElementById('product-price');
console.log(PriceInput);

const ProductTextInput=document.getElementById('product-text');
console.log(ProductTextInput);

const Products=JSON.parse(localStorage.getItem('products')) || [];
console.log(Products)

const CreateElement=(nameValue,ImageValue,PriceInputValue,ProductTextInputValue)=>{
    const Product_col=document.createElement('div');
    Product_col.classList.add('col-lg-3');
    console.log(Product_col)
    //single Product
    const SingleProductDiv=document.createElement('div');
    SingleProductDiv.classList.add('single-product')
    console.log(SingleProductDiv)
  
    const ProductImage=document.createElement('img');
    ProductImage.setAttribute('src',ImageValue);
    console.log(ProductImage);
  
    //Single Product Product h5
    const ProductPrice=document.createElement('h5');
    ProductPrice.innerText=PriceInputValue;
    console.log(ProductPrice.textContent);
    //Product name
    const ProdoctName=document.createElement('h3');
    ProdoctName.innerText=nameValue;
    console.log(ProdoctName.textContent);
  
    //Product Text
    const ProductText=document.createElement('p');
    ProductText.innerText=ProductTextInputValue;
  
    //create complete single product
    SingleProductDiv.append(ProductImage,ProductPrice,ProdoctName,ProductText)
    console.log(SingleProductDiv);
    //complete call
    Product_col.appendChild(SingleProductDiv);
    console.log(Product_col)
   
  
  allProductDiv.appendChild(Product_col);
  console.log(allProductDiv);

}

//add product
const add_product=(nameValue,ImageValue,PriceInputValue,ProductTextInputValue)=>{
Products.push({
    image:ImageValue,
    price:PriceInputValue,
    name:nameValue,
    text:ProductTextInputValue,
})
}

productForm.addEventListener('submit',(e)=>{
    console.log("submitted");
    e.preventDefault();
    const nameValue=ProductNameInput.value;
    const ImageValue=ProductImageUrlInput.value;
    const PriceInputValue=PriceInput.value;
    const ProductTextInputValue=ProductTextInput.value;
    const AllInfomation={
        nameValue,
        ImageValue,
        PriceInputValue,
        ProductTextInputValue,
    }
    console.log(AllInfomation);
    //call 
    CreateElement(nameValue,ImageValue,PriceInputValue,ProductTextInputValue)
    add_product(nameValue,ImageValue,PriceInputValue,ProductTextInputValue)


//store data at localStorage
localStorage.setItem('products',JSON.stringify(Products));
  //add data in the display

})

//show Product from localo stroage
Products.forEach(product => {
    CreateElement(
    product['name'],
    product['image'],
    product['price'],
    product['text']
    )
});


 



