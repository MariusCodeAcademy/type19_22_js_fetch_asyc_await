'use strict';
console.log('asyncAwait.js file was loaded');

const baseUrl = 'https://jsonplaceholder.typicode.com';

function getUsers() {
  return fetch(`${baseUrl}/users`)
    .then((resp) => {
      console.log('resp ===', resp);
      return resp.json();
    })
    .then((data) => {
      console.log('data ===', data);
      return data;
    })
    .catch((err) => console.warn(err));
}
// async ir await
async function getUsersA() {
  const resp = await fetch(`${baseUrl}/users`);
  const data = await resp.json();
  console.log('data ===', data);
  return data;
}
// let rez = getUsersA();
// console.log('rez ===', rez); // promise

// getUsersA().then((rez) => console.log(rez));
getUsers().then((rez) => console.log(rez));
