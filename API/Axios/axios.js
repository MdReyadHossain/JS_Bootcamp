/*
axios(config)
axios(url [, config])
axios.get(url [, config])
axios.post(url [, config])
axios.put(urt I, config])
axios.patch(url [, config])
axios.delete(url [, config])

axios returns response object - data, status, statusText, headers, config
*/

// showing signle data
axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log(response))
    .catch((error) => console.log("Got an error!"));

// creating a data
axios.post("https://jsonplaceholder.typicode.com/posts", {
    body: {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
})
    .then((response) => console.log(response))
    .catch((error) => console.log("Got an error!"));

// delete a data
axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log(response))
    .catch((error) => console.log("Got an error!"));


/* async-await */
const makeRequest = async (config) => {
    return await axios(config);
}

// get all data
const getAllData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
}

// update a single data
const updateData = () => {
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PUT",
        data: {
            title: 'food',
            body: 'barrrr',
            userId: 1,
        },
    })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
}

// getAllData();
updateData();