const jokeButton = document.getElementById('get-joke');
const jokeText = document.getElementById('joke');


function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
        jokeText.innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
        console.error('Error fetching the joke:', error);
        jokeText.innerText = 'Failed to fetch a joke. Please try again.';
    });
}

jokeButton.addEventListener('click', getJoke);