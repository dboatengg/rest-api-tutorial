//Get DOM elements by ID
const jokeButton = document.getElementById('get-joke');
const jokeText = document.getElementById('joke');

//Fetch joke data
function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => jokeText.innerText = `${data.setup} - ${data.punchline}`)

    //Handle error
    .catch(error => {
        console.error('Error fetching the joke:', error);
        jokeText.innerText = 'Failed to fetch a joke. Please try again.';
    });
}

//Add event listener to trigger getJoke function
jokeButton.addEventListener('click', getJoke);