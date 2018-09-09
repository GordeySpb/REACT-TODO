import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo } from '../actions';
import Form from '../сomponents/Form';

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addTodo }, dispatch)
);

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
