'use strict';

var allProducts = [];
var allCart = [];


// TODO: Create a "Cart" constructor that holds quantity, item, an an array of items in the cart
function Cart(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  allCart.push(this);
}

// Product Contructor
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  allProducts.push(this);

};

function generateCatalog() {


  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');


  //Save onto the local storage
  var loadImages = JSON.stringify(allProducts);
  localStorage.setItem('product', loadImages);
}

//Pulls cart from local storage.
function generateCartProducts(){
  var fromLocalStorageQuant = localStorage.getItem('cart-quant');
  var fromLocalStorageName = localStorage.getItem('cart-name');

  var quantCart = JSON.parse(fromLocalStorageQuant);
  var nameCart = JSON.parse(fromLocalStorageName);
  // quantCart = parseInt(quantCart);
  console.log('quantcart', quantCart);
  console.log('nameCart', nameCart);
  for(var i in nameCart){
    new Cart(nameCart[i], parseInt(quantCart[i]));
  }
}

// Initialize the app
generateCatalog();
generateCartProducts();

//push cart products to local storage
var toJSON = JSON.stringify(allCart);
localStorage.setItem('cart-list', toJSON);