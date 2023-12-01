'use strict';
console.log('asyncPrac.js file was loaded');

const baseUrl = 'https://jsonplaceholder.typicode.com';

// su atskirom funkcijom parsiusti ir iskonsolinti naudojant async await
// todos - pirmus 10
async function getTodos() {
  try {
    const resp = await fetch(`${baseUrl}/todos`);
    const todosArr = await resp.json();
    // console.log('todosArr ===', todosArr.slice(0, 10));
    return todosArr.slice(0, 10);
  } catch (error) {
    console.warn(error);
  }
}
// console.log('getTodos ===', getTodos());
// posts - pirmus 15
const getPosts = async function () {
  try {
    const resp = await fetch(`${baseUrl}/posts`);
    const postsArr = await resp.json();
    // console.log('postsArr ===', postsArr.slice(0, 15));
    return postsArr.slice(0, 15);
  } catch (error) {
    console.warn(error);
  }
};
// getPosts();
// comments - pirmus 7
const getComments = async () => {
  try {
    const resp = await fetch(`${baseUrl}/comments`);
    const commentsArr = await resp.json();
    // console.log('commentsArr ===', commentsArr.slice(0, 7));
    return commentsArr.slice(0, 7);
  } catch (error) {
    console.warn(error);
  }
};
// getComments();
// sukurti funkcija init() joje
// 1. atspausdinti todos, posts ir comments
// 2. sujungti i viena masyva ir atspausdinti todos, posts ir comments

async function init() {
  const todoArr = await getTodos();
  const postsArr = await getPosts();
  const commArr = await getComments();
  console.log('todoArr ===', todoArr);
  console.log('commArr ===', commArr);
  console.log('postsArr ===', postsArr);
  const oneArrToRuleThemAll = [...todoArr, ...commArr, ...postsArr];
  console.log('oneArrToRuleThemAll ===', oneArrToRuleThemAll);
}
init();
