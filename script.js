// office-bar

var office = document.getElementById("officebar")
var closes = document.getElementById("close")

closes.addEventListener("click", function () {
    office.style.display = "none"
})
//side navbar
var menuBar = document.getElementById("menuBar")
var sideNavbar = document.getElementById("side-navbar")
var sideclose = document.getElementById("side-navbar-close")


sideNavbar.style.marginLeft = "-60%"
menuBar.addEventListener("click", function () {
    sideNavbar.style.marginLeft = "0"
})

sideclose.addEventListener("click", function () {
    sideNavbar.style.marginLeft = "-60%"
})

// slider

var Moveright = document.getElementById("Move-right");
var MoveLeft = document.getElementById("Move-Left");
var Move = document.querySelector(".slider-image-container");
var Movemargin = 0;

// Right movement
Moveright.addEventListener("click", function () {
    Movemargin = Movemargin + 100;

    if (Movemargin > 200) { // Assuming there are 3 slides (0 to 200vw)
        Movemargin = 0; // Loop back to the first image
        Move.style.marginLeft = 0;
    } else {
        Move.style.marginLeft = "-" + Movemargin + "vw"; // Move to the next slide
    }
});

// Left movement
MoveLeft.addEventListener('click', function () {
    Movemargin = Movemargin - 100;

    if (Movemargin < 0) { // If the current slide is the first, loop back to the last
        Movemargin = 200; // Assuming there are 3 slides
        Move.style.marginLeft = "-" + Movemargin + "vw";
    } else {
        Move.style.marginLeft = "-" + Movemargin + "vw"; // Move to the previous slide
    }
});


// like button
var likeButtons = document.querySelectorAll('.like-button');

// Loop through each like button
likeButtons.forEach(function(likeButton) {
    // Add click event listener to each button
    likeButton.addEventListener('click', function() {
        // Check the current src of the image and toggle between black and red heart
        if (likeButton.src.includes('blackheart.png')) {
            likeButton.src = 'image/redheart.png';  // Change to red heart when clicked
        } else {
            likeButton.src = 'image/blackheart.png'; // Change back to black heart when clicked again
        }
    });
});




