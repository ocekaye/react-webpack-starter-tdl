/**
 * Created by Hinata on 3/3/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (

    <table className="table table-hover">
      <thead>
      <tr>
        <th/>
        <th>Todos</th>
        <th/>
      </tr>
      </thead>
      <tbody>
      {todos.map(todo =>
          <Todo
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id)}
          />,
      )}
      </tbody>

    </table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;