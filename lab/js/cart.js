'use strict';

var Cart = [];
var cartList = [];

function loadCart() {
  // TODO: Pull the cart (if it exists) from Local Storage
  var notReadyToUse = localStorage.getItem('cart-list');
  cartList = JSON.parse(notReadyToUse);
  console.log('cartlist', cartList);
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table
  var cartTable = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for(var i in cartList){

    // TODO: Create a TR
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = cartList[i].name;
    trElement.appendChild(thElement);

    // TODO: Create a TD for the quantity and the item
    var tdElement = document.createElement('td');
    tdElement.textContent = cartList[i].quantity;
    trElement.appendChild(tdElement);
    cartTable.appendChild(trElement);
  }
  // TODO: Add the TR to the TBODY and both TD's to the TR
}


function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

loadCart();

showCart();