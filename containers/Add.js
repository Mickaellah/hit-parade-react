import {connect} from 'react-redux';
import {addNewSongs} from '../actions';
import Add from '../components/Add';

const mapDispatchToProps = {
    addNewSongs,
}

export default connect(null, mapDispatchToProps) (Add);