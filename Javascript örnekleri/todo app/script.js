
const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");


const listeElemani = JSON.parse(localStorage.getItem("todos"));

if (listeElemani) {
    listeElemani.forEach((todo) => {
        addTodo(todo);
    });
}

function addTodo(params) {
    let todo = document.createElement("li");
    const todoText = input.value; 

    if(todoText){
        todo.innerText= todoText;
        todos.appendChild(todo);
    }
    input.value='';

    todo.addEventListener('click',()=>{
        todo.classList.toggle('completed')
    });
    updateLS();
}

form.addEventListener('submit',(e)=>{
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


