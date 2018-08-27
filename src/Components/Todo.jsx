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

const StyledForm = styled.form`
  display: flex;
  font-size: 1rem;
  padding: .85em;
  border-top: 1px solid rgba(0,0,0,.1);
  align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  outline: 1px solid #61dafb;    
`;

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


  handleEdit() {
    this.setState({ condition: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ condition: false });
  }

  handleDelete() {
    const { onDelete } = this.props;
    const { id } = this.props;
    onDelete(id);
  }

  renderDisplay() {
    const { title } = this.props;
    return (
      <StyledTodo>
        <Checkbox />
        <StyledSpan>{title}</StyledSpan>
        <Button name="Edit" onClick={this.handleEdit} />
        <Button name="Delete" onClick={this.handleDelete} />
      </StyledTodo>
    );
  }

  renderForm() {
    const { title } = this.props;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Checkbox />
        <StyledInput type="text" defaultValue={title} />
        <Button name="Save" />
      </StyledForm>
    );
  }

  render() {
    const { condition } = this.state;
    return condition ? this.renderForm() : this.renderDisplay();
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Todo;
