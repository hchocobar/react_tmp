import React, { useState, useEffect } from "react";

function Todos() {
  const urlTodos = 'https://jsonplaceholder.typicode.com/todos';
  const urlUsers = 'https://jsonplaceholder.typicode.com/users';
  
  const [todos, setTodos] = useState();
  const [users, setUsers] = useState();
  
  const fetchApiTodos = async () => {
    const response = await fetch(urlTodos);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  const fetchApiUsers = async () => {
    const response = await fetch(urlUsers);
    const responseJSON = await response.json();
    setUsers(responseJSON);
  };

  useEffect(() => {
      fetchApiTodos();
      fetchApiUsers();
  }, []);

  
  function userName(id) {
    let userElement = users.filter(function (element) {return (element.id == id)}); 
    return userElement[0].name;
  }

  return (
    <div className="container">
      <h2 className="text-center">Todos List</h2>
        <ul className="list-group">
            { !todos || !users ? <li class="list-group-item">Cargando los datos...</li> : 
              todos.map((todo,index) =>{
                return <li key={index} className={"list-group-item " + (todo.completed ? " list-group-item-primary" : " list-group-item-warning")}>
                  {todo.completed ? <i class="fas fa-check text-success"></i> : <i class="fas fa-times text-danger"></i>} - {userName(todo.userId)} - {todo.title} 
                </li>
              }
            )
          }
         </ul>
    </div>
  );
}

export default Todos;