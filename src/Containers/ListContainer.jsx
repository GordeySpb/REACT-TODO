import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../components/List';
import { deleteTodo, updateTodo, toggleTodo } from '../actions/index';


const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onDelete: deleteTodo,
    onEdit: updateTodo,
    onToggle: toggleTodo,
  }, dispatch)
);


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
