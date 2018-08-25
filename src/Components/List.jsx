import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Todo from './Todo';

const StyledSection = styled.section`

`;

const List = ({ todos }) => (
  <StyledSection>
    {todos.map((todo) => {
      <Todo key={todo.id} title="жвжыжв"/>;
    })
    }
  </StyledSection>
);

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
