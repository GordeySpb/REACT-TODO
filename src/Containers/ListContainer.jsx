import { connect } from 'react-redux';

import List from '../Components/List';
import { deleteTodo, updateTodo, toggleTodo } from '../helpers/actions';


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
