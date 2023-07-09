const makeRequest = async (url, method, data) => {
    const result = await $.ajax({
        url: url,
        method: method,
        data: data
    })
    return result;
}

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", "GET")
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
}

const createData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
        .then((response) => console.log(response))
        .catch((error) => console.log(`An Error Occured. \nError: ${JSON.stringify(error)}`))
}

getData();
createData();