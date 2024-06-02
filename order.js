document.addEventListener("DOMContentLoaded", function() {
    let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
    totalPrice += 3; // Add the $3 delivery charge
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;

    document.getElementById("order-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Display the success message
        alert("Your order is successfully ready and on its way toward your location! Around 15 mins and it will be with you! Enjoy your pizza.");
        
        // Optionally, you can reset the form or redirect the user after the message
        localStorage.removeItem('totalPrice');
        this.reset();
    });
});

