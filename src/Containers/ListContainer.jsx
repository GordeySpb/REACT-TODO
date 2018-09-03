import { connect } from 'react-redux';

import List from '../components/List';
import { deleteTodo, updateTodo, toggleTodo } from '../actions/index';


const mapStateToProps = ({ todos }) => ({ todos });

function mapDispatchToProps(dispatch) {
  return {
    onDelete: id => dispatch(deleteTodo(id)),
    onEdit: (id, title) => dispatch(updateTodo(id, title)),
    onToggle: id => dispatch(toggleTodo(id)),
  };
}


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
