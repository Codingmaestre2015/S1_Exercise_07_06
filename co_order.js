"use strict";

/*
   Exercise 07_06
   Order Form Script
   
   Author: 
   Date:   
   
   Filename: co_order.js
   
   Function List
   =============
   
   
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function() {
    var orderForm = document.forms.orderForm;
    orderForm.elements.orderDate.value = new Date().toDateString();
    orderForm.elements.model.focus();
    calcOrder();
});

//calcOrder()
//Calculates the cost of the customer order

function calcOrder() {
    var orderForm = document.forms.orderForm;

    // Calculate the initial cost of the order
    var mIndex = orderForm.elements.model.selectedIndex;
    var mCost = orderForm.elements.model.options[mIndex].value;
    var qIndex = orderForm.elements.qty.selectedIndex;
    var quantity = orderForm.elements.qty[qIndex].value;

    // Initial cost = model cost x quantity
    var initialCost = mCost * quantity;
    orderForm.elements.initialCost.value = initialCost;
}