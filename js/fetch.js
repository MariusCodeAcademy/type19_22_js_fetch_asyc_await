'use strict';
console.log('fetch.js file was loaded');

const url = 'https://jsonplaceholder.typicode.com/todos';

/*
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },

  <button type="button" class="list-group-item list-group-item-action">
      A second button item
    </button>
*/

const els = {
  todosListEl: document.getElementById('todos'),
};
console.log('els ===', els);

getTodos();

function getTodos() {
  fetch(url)
    .then((resp) => resp.json())
    .then((todoArr) => {
      // console.log('todoArr ===', todoArr);
      const todosToWorkWith = todoArr.slice(0, 6);
      console.table(todosToWorkWith);

      printTodosToHtml(todosToWorkWith);
    })
    .catch(console.warn);
}

// printTodosToHtml();

function printTodosToHtml(todoArr) {
  const htmlTodoElArr = todoArr.map((todoObj) => {
    console.log('todoObj ===', todoObj);
    const btnEl = document.createElement('button');
    btnEl.classList.add('list-group-item', 'list-group-item-action');
    if (todoObj.completed === true) {
      btnEl.classList.add('bg-success-subtle');
    }
    btnEl.innerHTML = `[id: ${todoObj.id}] 
      <strong>${todoObj.title}</strong> done: ${todoObj.completed}`;
    console.log('btnEl ===', btnEl);
    return btnEl;
  });

  els.todosListEl.append(...htmlTodoElArr);
}
