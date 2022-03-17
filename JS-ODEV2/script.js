
const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");
const toast = document.querySelector(".toast");
const addbutton = document.getElementById("AddButton");
const alert = new bootstrap.Toast(toast)
const listeElemani = JSON.parse(localStorage.getItem("todos"));

if (listeElemani) {
    listeElemani.forEach((todo) => {
        addTodo(todo);
    });
}

function addTodo(params) {
    var todo = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Sil";
    removeButton.classList.add("removeButton")
    const todoText = input.value; 
    removeButton.addEventListener("click", (e)=>{
        e.preventDefault();
        removeButton.parentElement.style.display = 'none';
        console.log("button çalişti")
    })
    if(todoText){   
        todo.innerText= todoText;
        todos.appendChild(todo);
        todo.appendChild(removeButton);
        alert.show();
    }
    for(let i=0;i<todo.length;i++){
        console.log("Çalişti")
        todo[i].appendChild(removeButton);
    }
    input.value='';

    todo.addEventListener('click',()=>{
        todo.classList.toggle('completed')
    });
    updateLS();
}

 


addbutton.addEventListener("click",(e)=>{
    e.preventDefault();
    addTodo();
})

function updateLS() {
    const todosEl = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

