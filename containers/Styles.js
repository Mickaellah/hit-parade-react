import {connect} from 'react-redux';
import {songLists} from '../actions';
import Styles from '../components/Styles';

function mapStateToProps(state) {
    console.log(state);
    return {
        songs: state.getSongs
    }
}

const mapDispatchToProps = {
    songLists,
}

export default connect(mapStateToProps, mapDispatchToProps) (Styles);