function toggleCart() {
  const cart = document.getElementById('cart');
  cart.classList.toggle('show');
}

const mainImage = document.getElementById('main-image');
  const subImages = document.querySelectorAll('.sub-image');

  subImages.forEach(subImage => {
    subImage.addEventListener('click', () => {
    mainImage.src = subImage.src.replace('-thumbnail', '');
  });
});

const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countElement = document.getElementById('count');

let count = 0;

decrementButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
});

incrementButton.addEventListener('click', () => {
  count++
  countElement.textContent = count;
});

function addToCart() {
  const itemName = document.getElementById('item-name').innerText;
  const itemPrice = document.getElementById('full-price').innerText;
  const itemCount = parseInt(document.getElementById('count').innerText);
  const cartItems = document.querySelector('.cart-items');

  
  
  const item = document.createElement('div');
  item.classList.add('cart-item');
  item.innerHTML = `
    <img src="images/image-product-1.jpg" alt="Item Image">
    <div class="item-details">
    <span>${itemName}</span>
    <span>${itemPrice}</span>
    <span> x${itemCount}</span>
    <span> <strong style="font-weight: bold; color: black;" > ${(parseFloat(itemPrice.replace('$', '')) * itemCount).toFixed(2)}<strong></span>
    <i class="fas fa-trash remove-icon" onclick="removeItem(event)" style="cursor: pointer;"></i>
    </div>
  `;

  const checkoutButton = document.createElement('button');
  checkoutButton.textContent = 'Checkout';
  checkoutButton.classList.add('checkout-button');
  
  cartItems.appendChild(item);

  // Reset the counter
  document.getElementById('count').innerText = '0';
  

}

function removeItem(event) {
  const cartItem = event.target.closest('.cart-item');
  if (cartItem) {
    cartItem.remove();
  }
}