// This function is called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set a 5 minute countdown
    var timer = 5 * 60;
    // Store the start time to calculate time taken later
    var startTime = timer;
    // Set an interval to update the timer every second
    var interval = setInterval(function() {
        // Decrement the timer
        timer--;
        // Update the timer display
        document.getElementById('time').textContent = formatTime(timer);
        // If the timer reaches 0, stop the interval, store the time and answers, and redirect to page3
        if (timer <= 0) {
            clearInterval(interval);
            storeTimeAndAnswers();
            redirectToPage3();
        }
    }, 1000);

    // Add a submit event listener to the question form
    document.getElementById('questionForm').addEventListener('submit', function(event) {
        // Prevent the form from submitting the traditional way
        event.preventDefault();
        // Stop the timer
        clearInterval(interval);
        // Store the time and answers
        storeTimeAndAnswers();
        // Redirect to page3
        redirectToPage3();
    });

    // Function to redirect to page3
    function redirectToPage3() {
        window.location.href = 'Page3/page3.html';
    }

    // Function to format the time
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
        return `${pad(minutes)}:${pad(remainingSeconds)}`;
    }

    // Function to pad a number with a leading zero if it's less than 10
    function pad(number) {
        return number < 10 ? '0' + number : number;
    }

    // Function to store the time taken and answers
    function storeTimeAndAnswers() {
        // Calculate the time taken
        var timeTaken = startTime - timer;
        // Store the time taken
        localStorage.setItem('timeTaken', timeTaken.toString());

        // Store the answers
        var answers = {};
        var formElements = document.getElementById('questionForm').elements;
        for (var i = 0; i < formElements.length; i++) {
            var element = formElements[i];
            if (element.name && element.value) {
                answers[element.name] = element.value;
            }
        }
        localStorage.setItem('userAnswers', JSON.stringify(answers));
    }
});