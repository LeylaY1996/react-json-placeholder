export function getUsers() {
    return fetch('http://localhost:3001/users')
    .then(data => data.json())
}