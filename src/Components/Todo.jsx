import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: false,
    };
  }
}

export default Todo;
