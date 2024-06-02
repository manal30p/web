document.addEventListener("DOMContentLoaded", function() {
    console.log('Script is loaded');
    
    // Fixed reviews
    const fixedReviews = [
        { name: "Emma Johnson", review: "The best pizza I've ever tasted! The crust is perfectly crispy, and the toppings are so fresh. Highly recommend!" },
        { name: "Liam Smith", review: "Absolutely delicious! The cheese blend is amazing, and the sauce has the perfect amount of zest. Will definitely order again." },
        { name: "Olivia Brown", review: "I can't get enough of this pizza. The flavors are incredible, and the ingredients are top-notch. Five stars!" },
        { name: "Noah Davis", review: "Hands down, the best pizza place in town. The variety of toppings and the quality of the dough are unbeatable." },
        { name: "Ava Wilson", review: "This pizza is a game-changer. The crust is light and airy, and the toppings are bursting with flavor. Highly recommend to all pizza lovers!" },
        { name: "William Martinez", review: "Incredible pizza! The balance of flavors is perfect, and the crust is just the right thickness. A must-try!" }
    ];
    
    // Function to display fixed reviews
    function displayFixedReviews() {
        const fixedReviewsContainer = document.getElementById('fixed-reviews-container');
        fixedReviews.forEach(review => {
            const reviewDiv = document.createElement("div");
            reviewDiv.classList.add('fixed-review');
            reviewDiv.innerHTML = `<h4>${review.name}</h4><p>${review.review}</p>`;
            fixedReviewsContainer.appendChild(reviewDiv);
        });
    }
    
    // Event listener for review form submission
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let reviewerName = document.getElementById('reviewer-name').value;
        let reviewText = document.getElementById('review-text').value;
      
        let reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review');
        reviewContainer.innerHTML = `
          <h4>${reviewerName}</h4>
          <p>${reviewText}</p>
        `;
        document.getElementById('reviews-container').appendChild(reviewContainer);
      
        // Optionally, clear the form
        this.reset();
      
        // Show a thank you message
        alert("Thank you for your review!");
    });
    
    // Display fixed reviews when the page loads
    displayFixedReviews();
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

const learnMoreBtn = document.getElementById("learn-more-btn");
learnMoreBtn.addEventListener("click", function() {
    alert("Welcome to Pizza Pie, where every bite is a slice of heaven! Located in the heart of Bekaa, our pizza restaurant is dedicated to serving you the finest and freshest pizzas, crafted with love and passion. Our chefs use only the highest quality ingredients to create a symphony of flavors that will tantalize your taste buds. Our cozy and inviting atmosphere is perfect for family dinners, date nights, and gatherings with friends. Whether you choose to dine in, take out, or enjoy our convenient delivery service, we promise an unforgettable pizza experience every time. Come and taste the difference at Pizza Pie, where great pizza and great times come together. We can't wait to serve you!");
});

const viewMenuBtn = document.getElementById("view-menu-btn");
viewMenuBtn.addEventListener("click", function() {
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});

const contactUsBtn = document.getElementById("contact-us-btn");
contactUsBtn.addEventListener("click", function() {
    alert("+961 76 735 324");
});

const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
});

function addToCart(price) {
    let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
    totalPrice += price;
    localStorage.setItem('totalPrice', totalPrice);

    let customAlert = document.createElement('div');
    customAlert.innerHTML = `
        <div class="custom-alert-overlay">
            <div class="custom-alert">
                <p>Do you want to add more items to your cart?</p>
                <button id="yes-btn">Yes</button>
                <button id="no-btn">No</button>
            </div>
        </div>
    `;
    document.body.appendChild(customAlert);

    document.getElementById('yes-btn').onclick = function() {
        document.body.removeChild(customAlert);
    }

    document.getElementById('no-btn').onclick = function() {
        window.location.href = 'order.html';
    }
}