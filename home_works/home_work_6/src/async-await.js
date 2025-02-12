async function fetchData(url){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Receive data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData('https://jsonplaceholder.typicode.com/todos/1');

