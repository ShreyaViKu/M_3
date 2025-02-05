document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  
    // Add to Cart functionality
    addToCartButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const productTitle = button.parentElement.querySelector(".card-title").textContent;
        const productPrice = button.parentElement.querySelector(".card-text").textContent;
  
        cartItems.push({ title: productTitle, price: productPrice });
        alert(`${productTitle} has been added to your cart!`);
        console.log(cartItems); // For debugging
      });
    });
  });
  