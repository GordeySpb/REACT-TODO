import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';


const List = ({
  todos, onDelete, onEdit, onToggle,
}) => (
  <section>
    {todos.length
      ? todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))
      : null
    }
  </section>
);


List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default List;
