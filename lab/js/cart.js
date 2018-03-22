'use strict';

var Cart = [];

function loadCart() {
  // TODO: Pull the cart (if it exists) from Local Storage and make available to this app
  var imgString = localStorage.getItem('cart');
  var useableCart = JSON.parse(imgString);

  if(useableCart && useableCart.length){
    Cart.allProducts = useableCart;
    console.log('cart loaded from local storage');
    return;
  }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table
  var cartTable = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for(var i in Cart.allProducts){

    // TODO: Create a TR
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = Cart.allProduct[i].name;
    trElement.appendChild(thELement);

    // TODO: Create a TD for the quantity and the item
    var tdElement = document.createElement('td');
    tdElement.textContent = Cart.allProduct[i].quantity;
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