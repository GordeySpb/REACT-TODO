import { connect } from 'react-redux';

import Error from '../components/Error';

const mapStateToProps = ({ error }) => ({ error });

const ErrorContainer = connect(mapStateToProps, null)(Error);

export default ErrorContainer;
