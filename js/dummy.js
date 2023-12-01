'use strict';
console.log('dummy.js file was loaded');

// parsisiusti postus is documentacija https://dummyjson.com/docs/posts

// parisiusti paprastai su funkcija,
// parsisiusti su async ir await
// parsisiusti su pagalbine fn getData()

// iskonsolinti sitame faile visus post

async function getPosts() {
  const ats = await getData('https://dummyjson.com/posts');
  // console.log('ats ===', ats);
  const { posts } = ats;
  console.log('posts ===', posts);
}
getPosts();
