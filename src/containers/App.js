import { connect } from 'react-redux'
import App from '../../App';
import Navigation from '../navigator/Navigation';

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Navigation)