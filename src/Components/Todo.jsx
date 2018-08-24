import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Checkbox from './Checkbox';
import Button from './Button';

const StyledTodo = styled.div`
  display: flex;
  font-size: 1rem;
  border-top: 1px solid rgba(0,0,0,.1);
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
  padding: 1em;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin-right: auto;
`;


class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: false,
    };
  }

  render() {
    const { title } = this.props;
    return (
      <StyledTodo>
        <Checkbox />
        <StyledSpan>{title}</StyledSpan>
        <Button name="Edit" />
        <Button name="Delete" />
      </StyledTodo>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Todo;
