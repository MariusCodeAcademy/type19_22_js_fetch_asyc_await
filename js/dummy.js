'use strict';
console.log('dummy.js file was loaded');

// parsisiusti postus is documentacija https://dummyjson.com/docs/posts

// parisiusti paprastai su funkcija,
// parsisiusti su async ir await
// parsisiusti su pagalbine fn getData()

const els = {
  postUl: document.getElementById('posts'),
};

// iskonsolinti sitame faile visus post
getPosts();

async function getPosts() {
  const ats = await getData('https://dummyjson.com/posts');
  // console.log('ats ===', ats);
  const { posts } = ats;
  // console.log('posts ===', JSON.stringify(posts[0]));
  generatePostHtml(posts);
}

function generatePostHtml(postsArr) {
  postsArr.forEach((postObj) => {
    createAndAddPost(postObj);
  });
}

const singlePost = {
  id: 1,
  title: 'His mother had always taught him',
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  userId: 9,
  tags: ['history', 'american', 'crime'],
  reactions: 2,
};

/* 
['history', 'american', 'crime'] => <span class="badge rounded-pill text-bg-secondary">history</span>
*/
function tagsToHtml(tagsArr) {
  let htmlStr = '';
  tagsArr.forEach((tagText) => {
    htmlStr += `<span class="badge rounded-pill text-bg-secondary me-1">${tagText}</span>`;
  });
  // console.log('htmlStr ===', htmlStr);
  return htmlStr;
}

/*
<div class="col-6">
  <div class="card ">
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <p class="fw-bold card-text">likes: </p>
    </div>
    <div class="card-footer text-body-secondary">
      Tags:
      <span class="badge rounded-pill text-bg-secondary">tag 1</span>
      <span class="badge rounded-pill text-bg-secondary">tag 2</span>
    </div>
  </div>
</div>
*/

function createAndAddPost(pObj) {
  // sukurti ir patalpinti i html 1 elementa
  // sukurriam vieno el isorini div
  const divEl = document.createElement('div');
  divEl.classList.add('col-6', 'mb-4');
  // sukuriam vidi el dali
  divEl.innerHTML = `
    <div class="card ">
      <div class="card-body">
        <h5 class="card-title">${pObj.title}</h5>
        <p class="card-text">${pObj.body.slice(0, 100)}...</p>
        <p class="fw-bold card-text">likes: ${pObj.reactions}</p>
      </div>
      <div class="card-footer text-body-secondary">
        Tags:
        ${tagsToHtml(pObj.tags)}
      </div>
    </div>
  `;
  const cardFooterEl = divEl.querySelector('.card-footer');
  console.log('cardFooterEl ===', cardFooterEl);
  // patalpinti
  els.postUl.append(divEl);
}
