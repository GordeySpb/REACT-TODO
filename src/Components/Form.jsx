import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const StyledForm = styled.form`
  display: flex;
  background-color: #FAFAFA;
  border-top: 1px solid rgba(0,0,0,.1);
  padding: 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  outline: none;
  transition: all .2s;
  outline: 1px solid #61dafb; 
  padding-left: 15px;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { onAdd } = this.props;

    if (title) {
      onAdd(title);
      this.setState({ title: '' });
    }
  }

  handleChange(event) {
    const title = event.target.value;
    this.setState({ title });
  }

  render() {
    const { title } = this.state;
    return (
      <StyledForm>
        <StyledInput
          type="text"
          value={title}
          onChange={this.handleChange}
          placeholder="Что нужно сделать?"
        />
        <Button name="Add" onClick={this.handleSubmit} />
      </StyledForm>
    );
  }
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Form;
