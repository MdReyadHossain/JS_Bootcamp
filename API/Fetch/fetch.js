// Get a data
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        if (!response.ok) {
            const msg = `Error: ${response.status}`;
            throw new Error(msg);
        }
        return response.json();
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

// Creating a data
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
})
    .then((response) => {
        if (!response.ok) {
            const msg = `Error: ${response.status}`;
            throw new Error(msg);
        }
        return response.json();
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

// Delete a data
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then((response) => {
        if (!response.ok) {
            const msg = `Error: ${response.status}`;
            throw new Error(msg);
        }
        return response.json();
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));




/* using async-await */
const makeRequest = async (url, configuration) => {
    const response = await fetch(url, configuration);
    if (!response.ok) {
        const msg = `Error: ${response.status}`;
        throw new Error(msg);
    }
    return response.json();
}

const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
            title: 'food',
            body: 'barrrrr',
            userId: 1,
        })
    })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
}
updateData();