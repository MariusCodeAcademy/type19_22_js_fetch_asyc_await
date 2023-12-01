'use strict';
console.log('tryCatch.js file was loaded');

let obj = {
  name: 'James',
};
try {
  obj.map(() => {});
} catch (error) {
  console.log('klaida, obj neturi map metodo');
  console.log(error);
  console.log(error.message);
  console.log(error.name);
}
