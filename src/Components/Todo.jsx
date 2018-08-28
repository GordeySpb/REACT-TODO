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
  padding: 8px;
  outline: 1px solid #61dafb; 
  border: none;
`;

const StyledSpanCompleted = styled.span`
  text-decoration: line-through;
  flex: 1;
`;

const StyledTodoCompleted = styled.div`
  color: lightgray;
  transition: color .2s;
  display: flex;
  font-size: 1rem;
  border-top: 1px solid rgba(0,0,0,.1);
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
  padding: 1em;
  align-items: center;
`;

const StyledBytton = styled.button`
  font-weight: bold;
  font-size: 15px;
  border-radius: 3px;
  background-color: #ddd;
  margin-left: 10px;
  border: none;
  height: 25px;
  width: 60px;
  color: red;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
`;


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

    this.state = {
      condition: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }


  handleEdit() {
    this.setState({ condition: true });
  }

  handleSubmit(event) {
    const { onEdit, id } = this.props;
    event.preventDefault();

    const title = this.textInput.current.value;
    onEdit(id, title);
    this.setState({ condition: false });
  }

  handleDelete() {
    const { onDelete } = this.props;
    const { id } = this.props;
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
        {completed
          ? (
            <StyledTodoCompleted>
              <Checkbox onChange={this.handleToggle} />
              <StyledSpanCompleted>{title}</StyledSpanCompleted>
              <StyledBytton name="Edit" onClick={this.handleEdit} />
              <StyledBytton name="Delete" onClick={this.handleDelete} />
            </StyledTodoCompleted>
          )
          : (
            <StyledTodo>
              <Checkbox onChange={this.handleToggle} />
              <StyledSpan>{title}</StyledSpan>
              <Button name="Edit" onClick={this.handleEdit} />
              <Button name="Delete" onClick={this.handleDelete} />
            </StyledTodo>
          )
        }
      </div>
    );
  }

  renderForm() {
    const { title } = this.props;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Checkbox />
        <StyledInput type="text" innerRef={this.textInput} defaultValue={title} />
        <Button name="Save" onClick={this.handleSubmit} />
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
  onEdit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
