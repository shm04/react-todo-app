import { useState } from 'react';
import PropTypes from 'prop-types'

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
        className="input-text"
      />
      <button className="input-submit" type='submit'>Submit</button>
    </form>
  );
};
export default InputTodo;

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};


