import Login from '../components/Login';
import { connect } from 'react-redux'
import { login } from '../redux/auth';

const mapActionsToProps = { login };

export default connect(null,mapActionsToProps)(Login)