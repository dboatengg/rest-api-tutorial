document.getElementById('get-joke').addEventListener('click', getJoke);

function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            console.error('Error fetching the joke:', error);
            document.getElementById('joke').innerText = 'Failed to fetch a joke. Please try again.';
        });
}
