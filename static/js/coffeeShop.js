"use strict";

const addItemToCart = (itemName) => {
  // function adds the itemName to the user's cart
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
    `); 
    } 


const resetCart = () => {
  // .empty empties the cart, but doesn't delete the cart, just empty; 
  // cart-items still exists
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  // cartTotal equals whatever is in cart-total
  const cartTotal = $('#cart-total');
  console.log(`price = ${price}`)
  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};


const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  console.log(coffeeSold)
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};


const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
})


$('#place-order').on('click', () => {
  // we increment the number of coffee sold based on what we add to the cart
  // '#cart-items' is what we've added to the cart
  // children().length is the number of children (tr) off of tbody
  // "children" are the number of branches off of tbody
  // in this example, it's the number of coffees we ordered in the cart
  //document.querySelectorAll
  incrementCoffeeSold($('#cart-items').children().length);  
  // resets the cart
  resetCart();
});
