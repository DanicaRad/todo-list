import { useState } from "react";
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    setTodos(todos => [...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h3>New Todo List</h3>
      <NewTodoForm makeTodo={addTodo}/>
      <ul className="todo-list">
        {todos.map(({id, todo}) =>
          <Todo
            id={id}
            key={id}
            todo={todo}
            removeTodo={removeTodo}
          />
        )}
      </ul>
    </div>
  )
}

export default TodoList;