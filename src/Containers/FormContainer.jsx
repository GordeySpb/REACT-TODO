import { connect } from 'react-redux';

import { addTodo } from '../helpers/actions';
import Form from '../Components/Form';

// const mapStateToProps = ({ title }) => ({ title });

function mapDispatchToProps(dispatch) {
  return {
    onAdd: title => dispatch(addTodo(title)),
  };
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
