function fetchData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Receive data:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData('https://jsonplaceholder.typicode.com/todos/1');
