let url = 'https://jsonplaceholder.typicode.com/posts';

const makeRequest = (method, url, reqData = null) => {
    return new Promise((reject, resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onload = () => {
            let data = xhr.response;
            console.log(JSON.parse(data));
        }

        xhr.onerror = () => {
            console.log("Caught an error!");
        }

        xhr.send(JSON.stringify(reqData));
    });
}

const getAllInfo = () => {
    makeRequest('GET', url)
        .then((respose) => console.log(respose));
}

const getSingleInfo = () => {
    makeRequest('GET', url + '/1');
}
getAllInfo();
getSingleInfo();