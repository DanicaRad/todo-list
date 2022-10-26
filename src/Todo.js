
const Todo = ({ id, removeTodo, todo }) => {
  const remove = () => removeTodo(id);

  return (
    <li key={id} id ={id}>
      {todo}
      <button onClick={remove}>X</button>
    </li>
  );
};

export default Todo;
