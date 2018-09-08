import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo as TodoActionCreators } from '../actions/index';
import Form from '../сomponents/Form';

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addTodo: TodoActionCreators }, dispatch)
);

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
