import { connect } from 'react-redux';

import Preloader from '../сomponents/Preloader';

const mapStateToProps = ({ preloader }) => ({ preloader });

const PreloaderContainer = connect(mapStateToProps)(Preloader);

export default PreloaderContainer;
