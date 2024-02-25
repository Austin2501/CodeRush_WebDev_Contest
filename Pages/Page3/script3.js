document.addEventListener('DOMContentLoaded', function () {

    // Retrieve time taken from local storage
    const timeTaken = localStorage.getItem('timeTaken'); // Corrected key to 'timeTaken'

    // Display time taken on Page 3
    document.getElementById('timeTaken').textContent = `${timeTaken} seconds`;
    

    // Retrieve answers from local storage
    const answers = JSON.parse(localStorage.getItem('userAnswers')); // Corrected key to 'userAnswers'

    // Display answers on Page 3
    const answersContainer = document.getElementById('answersList');
    for (const key in answers) {
        const answer = answers[key];
        const answerElement = document.createElement('li');
        answerElement.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${answer}`;
        answersContainer.appendChild(answerElement);
    }

    // Optionally, clear local storage after displaying answers
    // localStorage.removeItem('timeTaken');
    // localStorage.removeItem('userAnswers');
});