import Home from '../components/Home';
import { connect } from 'react-redux'
import { logout } from '../redux/auth';

const mapActionsToProps = { logout };

export default connect(null,mapActionsToProps)(Home)