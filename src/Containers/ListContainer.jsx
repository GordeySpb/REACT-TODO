import { connect } from 'react-redux';

import List from '../Components/List';
import { deleteTodo, updateTodo } from '../helpers/actions';


const mapStateToProps = ({ todos }) => ({ todos });

function mapDispatchToProps(dispatch) {
  return {
    onDelete: id => dispatch(deleteTodo(id)),
    onEdit: (id, title) => dispatch(updateTodo(id, title)),
  };
}


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
