// This function is called when the page2Button is clicked
function navigateToPage2() {
    // Get the page2Button element
    var page2Button = document.getElementById('page2Button');

    // Add a click event listener to the page2Button
    page2Button.addEventListener('click', function () {
        // When the page2Button is clicked, navigate to page2.html
        window.location.href = 'Pages/page2.html';
    });
}

// Call the navigateToPage2 function when the window has finished loading
window.onload = navigateToPage2;