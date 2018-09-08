import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Checkbox from './Checkbox';
import Button from './Button';


const StyledSpan = styled.span`
  margin-right: auto;
  ${({ completed }) => (completed
    ? `text-decoration: line-through;
        flex: 1;
        color: lightgray;
      `
    : '')
}
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
  padding: 8px;
  outline: 1px solid #61dafb; 
  border: none;
`;


const StyledTodoCompleted = styled.div`
  transition: color .2s;
  display: flex;
  font-size: 1rem;
  border-top: 1px solid rgba(0,0,0,.1);
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
  padding: 1em;
  align-items: center;
  ${({ completed }) => (completed
    ? `
        flex: 1;
        color: lightgray;
      `
    : '')
}

}
`;

const StyledButton = styled(Button)`
  ${({ completed }) => (completed
    ? ` 
    background-color: #ddd;
    color: #fff;
    &:hover 
      cursor pointer;
      background-color: #cecaca;
      text-decoration: none;
      `
    : '')
}

`;


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

    this.state = {
      isEditing: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }


  handleEdit() {
    this.setState({ isEditing: true });
  }

  handleSubmit(event) {
    const { onEdit, id } = this.props;
    event.preventDefault();

    const title = this.textInput.current.value;
    onEdit({ id, title });
    this.setState({ isEditing: false });
  }

  handleDelete() {
    const { onDelete, id } = this.props;
    onDelete(id);
  }

  handleToggle() {
    const { onToggle, id } = this.props;
    onToggle(id);
  }

  renderDisplay() {
    const { title } = this.props;
    const { completed } = this.props;
    return (
      <div>
        <StyledTodoCompleted completed={completed}>
          <Checkbox onChange={this.handleToggle} completed={completed} />
          <StyledSpan completed={completed}>{title}</StyledSpan>
          <StyledButton name="Edit" onClick={this.handleEdit} completed={completed} />
          <StyledButton name="Delete" onClick={this.handleDelete} completed={completed} />
        </StyledTodoCompleted>
      </div>
    );
  }

  renderForm() {
    const { title } = this.props;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput type="text" innerRef={this.textInput} defaultValue={title} />
        <Button name="Save" onClick={this.handleSubmit} />
      </StyledForm>
    );
  }

  render() {
    const { isEditing } = this.state;
    return isEditing ? this.renderForm() : this.renderDisplay();
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
