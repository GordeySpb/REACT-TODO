import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Todo from './Todo';

const StyledSection = styled.section`

`;

const StyledDiv = styled.div`
  text-align: center;
`;

function List({
  todos, onDelete, onEdit, onToggle,
}) {
  return (
    <StyledSection>
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
        : <StyledDiv>Загрузка...</StyledDiv>
    }
    </StyledSection>
  );
}


List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default List;
