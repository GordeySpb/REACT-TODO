import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 0px 15px;
  height: 15px;
  width: 15px;
    &:hover {
      cursor: pointer;
    }
`;
/**
 * Кщмпонент Checkbox
 * @param {Function} params.onChange функия уоторая сработает при клике на чекбокс
 * @param {boolean} params.completed сведения о todo(выполнена или нет)
 */
const Checkbox = ({ onChange, completed }) => (
  <StyledInput type="checkbox" onClick={onChange} checked={completed ? 'checked' : ''} />
);

Checkbox.propTypes = {
  onChange: PropTypes.func,
  completed: PropTypes.bool.isRequired,
};

Checkbox.defaultProps = {
  onChange: () => {},
};

export default Checkbox;
