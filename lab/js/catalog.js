'use strict';

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var option = document.getElementById('items');

  for(var i=0; i < allProducts.length; i++) {
    var optionElement = document.createElement ('option');
    optionElement.textContent = allProducts[i].name;

    option.appendChild(optionElement);

  }
}





//DOM

function handleSubmit(event) {
  // TODO: Prevent the page from reloading

  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart() {
  // TODO: Add the selected item and quantity to the cart
}

function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage

}

function updateCounter() {
  // TODO: Update the cart count in the header
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)


var localProductsString = localStorage.getItem('product');
var allProducts = JSON.parse(localProductsString);





// Start it up ...
populateForm();