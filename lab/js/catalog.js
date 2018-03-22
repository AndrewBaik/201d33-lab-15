'use strict';
var totalItems;
var cartQuant = [];
var cartName = [];

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var option = document.getElementById('items');

  for(var i in allProducts) {
    var optionElement = document.createElement ('option');
    optionElement.textContent = allProducts[i].name;

    option.appendChild(optionElement);
  }
}


function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things
  addSelectedItemToCart(event);
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart(event) {
  // TODO: Add the selected item and quantity to the cart
  var chartQuantity = parseInt(event.target.quantity.value);
  console.log(chartQuantity);

  var chartName = event.target.items.value;
  console.log(chartName);


  cartQuant.push(chartQuantity);
  cartName.push(chartName);
  console.log('cart quant',cartQuant);
  console.log('cart name', cartName);
}


function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage
  var cartQuantToLS = JSON.stringify(cartQuant);
  var cartNameToLS = JSON.stringify(cartName);

  localStorage.setItem('cart-quant',cartQuantToLS);
  localStorage.setItem('cart-name', cartNameToLS);
}

function updateCounter() {
  totalItems = 0;
  // TODO: Update the cart count in the header
  for(var i in cartQuant){
    totalItems += cartQuant[i];
  }

  var spanElement = document.getElementById('itemCount');
  spanElement.innerHTML = '';
  var spanEl = document.createElement('span');
  spanEl.textContent = totalItems;
  spanElement.appendChild(spanEl);
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
  var divElement = document.getElementById('cartContents');
  divElement.innerHTML = '';

  var tableElement = document.createElement('table');

  for(var i in cartName){
    var trElement = document.createElement('tr');

    var tdElement = document.createElement('td');

    tdElement.textContent = cartName[i];

    trElement.appendChild(tdElement);

    // trElement = document.createElement('tr');
    tdElement = document.createElement('td');
    tdElement.textContent = cartQuant[i];
    trElement.appendChild(tdElement);
    tableElement.appendChild(trElement);
    divElement.appendChild(trElement);
  }
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)

var formSubmit = document.getElementById('catalog').addEventListener('submit', handleSubmit);




var localProductsString = localStorage.getItem('product');
var allProducts = JSON.parse(localProductsString);


// Start it up ...
populateForm();