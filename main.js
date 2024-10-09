// Get the button
let topButton = document.getElementById("topBtn");

// When the user scrolls down 300px from the top, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
topButton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
