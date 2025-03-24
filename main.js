let search = document.querySelector('.search-box');

document.querySelector ('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

function addToCart(productName, price) {
    // Create a new list item for the cart
    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    cartItem.textContent = `${productName} - $${price}`;

    // Append the item to the cart
    document.getElementById('cart').appendChild(cartItem);
}

let navbar = document.querySelector('.navbar');

document.querySelector ('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});



        function checkout() {
            alert(`Thank you for your purchase! Total amount: $${cartTotal.toFixed(2)}`);
            // You can add further processing here, like sending the order to a server or updating inventory.
            
            // Reset cart and total
            cartTotal = 0;
            document.getElementById('cart').innerHTML = '';
            document.getElementById('total').textContent = `Total: $0.00`;
        }
let cartTotal = 0;

        function addToCart(productName, price) {
            // Create a new list item for the cart
            const cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            cartItem.textContent = `${productName} - $${price}`;

            // Update total
            cartTotal += price;

            // Update total display
            document.getElementById('total').textContent = `Total: $${cartTotal.toFixed(2)}`;

            // Append the item to the cart
            document.getElementById('cart').appendChild(cartItem);
        }