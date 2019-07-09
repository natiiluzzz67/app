onLoad();



function onLoad() {
let cinema = []

let filme1 = 
{
    name: "Aladdin",
    classificacao: 0,
    diretor: "Guy Ritchie"
}
let filme2 = 
{
    name: "Toy Story 4",
    classificacao: 0,
    diretor: "Josh Cooley"
}
let filme3 = 
{
    name: "Annabelle",
    classificacao: 14,
    diretor: "Gary Dauberman"
}
let filme4 = 
{
    name: "10 coisas que eu odeio em você",
    classificacao: 10,
    diretor: "Gil Junger"
}

let filme5 = 
{
    name: "O Rei Leão",
    classificacao: 10,
    diretor: "Jon Favreau"
}




cinema.push(filme1)
cinema.push(filme2)
cinema.push(filme3)
cinema.push(filme4)
cinema.push(filme5)

cinema.sort(ordenarPorclassificacao);

  imprimirArray('spanOrdenadaPorclassificacao', cinema);
}

function ordenarPorclassificacao(a, b){
    return a.classificacao - b.classificacao;
    }
    
    function imprimirArray(id, array) {
      let span = document.getElementById(id);
      span.innerHTML = '';
    
      for (let i = 0; i < array.length; i++) {
        span.innerHTML += array[i].name + ' = classificação ' + array[i].classificacao + ', diretor ' + array[i].diretor + "<br>" ;
      }
    }

    var listElement = document.querySelector("#app ul")
    var inputElement = document.querySelector("#app input")
    var buttonElement = document.querySelector("#app button")
    
    var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

    function renderTodos() {
        listElement.innerHTML = "";
        for (todo of todos) {
            var todoElement = document.createElement("li");
            var todoText = document.createTextNode(todo);
    
            var linkElement = document.createElement("a");
    
            linkElement.setAttribute("href", "#");
    
            var pos = todos.indexOf(todo);
    
            linkElement.setAttribute("onclick", "DeleteTodo(" + pos + ")")
    
            var linkText = document.createTextNode("Excluir");
    
            linkElement.appendChild(linkText);
    
    
            todoElement.appendChild(todoText);
            todoElement.appendChild(linkElement);
            listElement.appendChild(todoElement);
        }
    }
    
    renderTodos();
    
    function addTodo() {
        var todoText = inputElement.value;
    
        todos.push(todoText);
        inputElement.value = "";
        renderTodos();
        saveToStorage();
    }
    
    buttonElement.onclick = addTodo;
    
    function DeleteTodo(pos) {
        todos.splice(pos, 1)
        renderTodos();
        saveToStorage();
    }
    
    function saveToStorage() {
        localStorage.setItem("list_todos", JSON.stringify(todos));
    }



