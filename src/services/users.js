var url="http://localhost:3001"

export function getUsers() {
    return fetch('http://localhost:3001/users')
    .then(data => data.json())
}

export function getAlbums() {
    return fetch('http://localhost:3001/albums/')
    .then(data => data.json())
}

export function getPhotos(id) {
    return fetch('http://localhost:3001/albums/'+id)
    .then(data => data.json())
}