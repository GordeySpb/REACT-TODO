import { connect } from 'react-redux';

import List from '../Components/List';
import { deleteTodo } from '../helpers/actions';


const mapStateToProps = ({ todos }) => ({ todos });

function mapDispatchToProps(dispatch) {
  return {
    onDelete: id => dispatch(deleteTodo(id)),
  };
}


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
