//fetch user data
async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data;
}


//display user data in a table
function displayUsers(users){
    const userTableBody = document.getElementById('userTableBody')
    
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td><button class="todoBtn" userid="${user.id}" onclick="displayTodo(${user.id})">To-Do</button></td>
          <td><button class="albumBtn" userid="${user.id}">View</button></td>
        `;

        userTableBody.appendChild(row);
        row.classList.add('border-b');
      });
}

//display todo data
async function displayTodo(userId){
     const response = await fetch("https://jsonplaceholder.typicode.com/todos/${userId}");
     const todos = await response.json();
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   console.log('hi');
    const todoTableBody = document.getElementById('todoTableBody')
    todoTableBody.innerHTML='';

    todos.forEach(todo => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${userId}</td>
          <td>${todo.id}</td>
          <td>${todo.title}</td>
          <td>${todo.completed}</td>
        `;

        todoTableBody.appendChild(row);

      });
}

//display album data
async function displayAlbum(userId){
    const response = await fetch("https://jsonplaceholder.typicode.com/albums?userId=${userId}");
    const albums = await response.json();

    const albumTableBody = document.getElementById('albumTableBody')
    albumTableBody.innerHTML='';

    albums.forEach(album => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${userId}</td>
          <td>${todo.id}</td>
          <td>${todo.title}</td>
        `;

        albumTableBody.appendChild(row);
        
      });

      
}

//buttons

const buttons1 = document.querySelectorAll('.todoBtn');

buttons1.forEach(button1 => {
    button1.addEventListener('click' , () => {
    const userId = button1.getAttribute('userid');
    console.log(userId);
    displayTodo(userId);
    });
});

const buttons2 = document.querySelectorAll('.albumBtn');

buttons2.forEach(button2 => {
    button2.addEventListener('click' , () => {
    const userId = button2.getAttribute('userid');
    displayAlbum(userId);
    });
});


getData()
    .then(displayUsers)
    