//fetch user data
async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
}

//display user data in table
async function displayUser(){
    const users = await getData()
    console.log(users)

    const userTableBody = document.getElementById('table-body')

    for(let user of users){
        const row = document.createElement('tr')

        const idCell = document.createElement('td')
        idCell.textContent = user.id
        idCell.classList.add('px-12', 'py-2'); 
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = user.name
        nameCell.classList.add('px-12', 'py-2'); 
        row.appendChild(nameCell)
        
        const emailCell = document.createElement('td')
        emailCell.textContent = user.email
        emailCell.classList.add('px-8', 'py-2'); 
        row.appendChild(emailCell)

        const action1Cell = document.createElement('td');
        const button1Cell = document.createElement('button');
        button1Cell.textContent = 'To-Do';
        button1Cell.className = 'action-button1';
        action1Cell.appendChild(button1Cell);
        action1Cell.classList.add('px-8', 'py-2');
        row.appendChild(action1Cell)

        const action2Cell = document.createElement('td');
        const button2Cell = document.createElement('button');
        button2Cell.textContent = 'View';
        button2Cell.className = 'action-button2';
        action2Cell.classList.add('px-8', 'py-2');
        action2Cell.appendChild(button2Cell);
        row.appendChild(action2Cell)


        userTableBody.appendChild(row); 

        row.classList.add('border-b');
    }
}

displayUser()