// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader ()

let url = 'https://jsonplaceholder.typicode.com/posts';

const makeRequest = (method, url, reqData = null) => {
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
}

const getAllInfo = () => {
    makeRequest('GET', url);
}

const getSingleInfo = () => {
    makeRequest('GET', url + '/2');
}

const createInfo = () => {
    makeRequest('POST', url, {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}

const updateInfo = () => {
    makeRequest('PUT', url + '/2', {
        title: 'food',
        body: 'night-bar',
        userId: 1,
    });
}

const updateSingleInfo = () => {
    makeRequest('PATCH', url + '/2', {
        body: 'barma'
    });
}

const deleteSingleInfo = () => {
    makeRequest('DELETE', url + '/1');
}

getAllInfo();
getSingleInfo();
createInfo();
updateInfo();
updateSingleInfo();
deleteSingleInfo();