import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ makeTodo }) => {
  const [formData, setFormData] = useState({ todo: ""});

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    makeTodo({...formData, id: uuid()});
    setFormData({todo: ""})
  }

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>Task:</label>
        <input
          id='todo'
          type='text'
          name='todo'
          value={formData.todo}
          onChange={handleChange}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default NewTodoForm;