let total = 0;

function handleClickBtn(target){
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.childNodes[5].innerText;
  const orderedList = document.createElement('ol');
  const listItem = document.createElement('li');
  listItem.innerText = itemName
  orderedList.appendChild(listItem);
  selectedItemContainer.appendChild(orderedList);

  const price = target.childNodes[7].innerText.split(" ")[0];

  total = parseFloat(total) + parseFloat(price);
  document.getElementById("total").innerText =  total;
  document.getElementById("finalTotal").innerText =  total;
  const makePurchaseButton = document.getElementById("makePurchase");
  makePurchaseButton.disabled = total === 0;
}

// Coupon Code starts here -- 
document.getElementById('couponInput').addEventListener('keyup', function(event){
  const couponCode = event.target.value;
  const applyButton = document.getElementById('applyCoupon');
  if(couponCode === 'SELL200'){
      applyButton.removeAttribute('disabled');
  }
  else{
      applyButton.setAttribute('disabled', true);
  }
})

// Calculation after Coupon code validation starts from here
document.getElementById("applyCoupon").addEventListener("click", function() {
  const couponInput = document.getElementById("couponInput").value;
  if (couponInput === "SELL200") {
      const totalPrice = total;
      if (totalPrice >= 200) {
          const discount = totalPrice * 0.2;
          document.getElementById("discount").textContent = discount.toFixed(2);
          const discountFinal = discount.toFixed(2);
          document.getElementById("finalTotal").textContent = totalPrice - discountFinal;
          const grandFinalTotal = document.getElementById("finalTotal").textContent;
          return grandFinalTotal;
      }
  }
  else{
  }
});