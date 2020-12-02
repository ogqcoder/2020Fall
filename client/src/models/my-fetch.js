const API_ROOT = process.env.API_ROOT || 'http://localhost:3000/';

export function myFetch(url, data = null) {

    if (data) {
        return fetch(API_ROOT + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then(x => x.json())
    } else {
        return fetch(API_ROOT + url).then(x => x.json())
    }
}

export async function myFetch2(url, data) {



    var VALUE = JSON.stringify(data, null, 2);
    console.log(VALUE);

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(API_ROOT + url, {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: VALUE
    })
        .then(data => data.json())
        .then(data => { console.log(data) })
        .catch((err) => {
            console.error(err, "err");
        })

}

export function fetchUsers(url) {
    return fetch(url).then(x => x.json())
}

