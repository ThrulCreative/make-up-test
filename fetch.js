const listItems = document.querySelector('.list');

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(todo => {
        todo.map(list => {
            
            listItems.innerHTML += list.title;
        })
})