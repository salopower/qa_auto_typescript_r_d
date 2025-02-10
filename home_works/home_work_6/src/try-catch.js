async function fetchDataWithFallback(firstUrl, secondUrl) {
    try {
        const response = await fetch(firstUrl);
        if (!response.ok) {
            throw new Error(`Primary request failed. Trying fallback request.\nStatus: ${response.status}\nURL: ${firstUrl}`);
        }
        const data = await response.json();
        console.log('Received data from first source:\n', data);
        return data;
    } catch (error) {
        console.error('Error fetching data from first source. Trying second source:\n', error);
        try {
            const response = await fetch(secondUrl);
            if (!response.ok) {
                throw new Error(`Secondary request failed.\nStatus: ${response.status}\nURL: ${secondUrl}`);
            }
            const data = await response.json();
            console.log('Received data from second source:\n', data);
            return data;
        } catch (fallbackError) {
            console.error('Error fetching data from second source:\n', fallbackError);
            throw new Error('Both requests failed. No data retrieved.');
        }
    }
}

fetchDataWithFallback('https://test-url.com/data', 'https://jsonplaceholder.typicode.com/todos/1')
    .catch(error => console.error('Final error:', error));
