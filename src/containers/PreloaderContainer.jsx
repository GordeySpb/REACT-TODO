import { connect } from 'react-redux';

import Preloader from '../components/Preloader';

const mapStateToProps = ({ preloader }) => ({ preloader });

const PreloaderContainer = connect(mapStateToProps, null)(Preloader);

export default PreloaderContainer;
